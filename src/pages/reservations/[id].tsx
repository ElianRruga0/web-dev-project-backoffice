import GoBack from "@/components/GoBack";
import { deleteReservation, getReservations } from "@/queries/reservations";
import { userAtom } from "@/state";
import { useAtomValue } from "jotai";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  IoMail,
  IoCallSharp,
  IoWalkSharp,
  IoBicycleSharp,
} from "react-icons/io5";

const Reservation: NextPage<{ id: any }> = ({ id }) => {
  const router = useRouter();
  const user = useAtomValue(userAtom);
  const [loading, setLoading] = useState<boolean>(true);
  const [reservation, setReservation] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (user) {
        const reservations = await getReservations(user.token).catch(() =>
          router.push("/login")
        );
        setReservation(reservations.reservations[0]);
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const handleDelete = async () => {
    await deleteReservation(id, user.token)
      .then(() => router.push("/reservations"))
      .catch(() => router.push("/login"));
  };

  if (!loading && reservation)
    return (
      <div className="container mx-auto py-14">
        <GoBack />

        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold italic outline-none bg-transparent">
            {reservation.name} {reservation.surname}
          </h1>
          <button
            onClick={handleDelete}
            className="bg-red-800 px-4 py-2 text-white text-center rounded-lg uppercase font-bold text-xl"
          >
            Delete
          </button>
        </div>

        <div className="grid grid-cols-4 my-8 gap-4">
          <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-4 py-2">
            <IoMail className="text-2xl text-zinc-700" />
            <h1 className="text-lg text-zinc-700">{reservation.email}</h1>
          </div>

          <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-4 py-2">
            <IoCallSharp className="text-2xl text-zinc-700" />
            <h1 className="text-lg text-zinc-700">{reservation.phone}</h1>
          </div>

          <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-4 py-2">
            <IoWalkSharp className="text-2xl text-zinc-700" />
            <h1 className="text-lg text-zinc-700">
              {reservation.guests} guests
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-4 py-2">
            <IoBicycleSharp className="text-2xl text-zinc-700" />
            <Link
              href="/activities/[id]"
              as={`/activities/${reservation.activity.id}`}
              className="text-lg text-zinc-700"
            >
              {reservation.activity.name}
            </Link>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="container mx-auto py-14">
        <h1 className="text-3xl font-bold underline">Loading</h1>
      </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query?.id;

  return {
    props: {
      id,
    },
  };
};

export default Reservation;
