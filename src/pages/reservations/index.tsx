import GoBack from "@/components/GoBack";
import { getReservations } from "@/queries/reservations";
import { isOperatorAtom, userAtom } from "@/state";
import { useAtomValue } from "jotai";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  IoArrowForwardCircle,
  IoMail,
  IoPersonCircleSharp,
  IoWalkSharp,
} from "react-icons/io5";

const Reservations: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const isOperator = useAtomValue(isOperatorAtom);
  const [reservations, setReservations] = useState<any>([]);

  const user = useAtomValue(userAtom);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (user) {
        const reservations = await getReservations(user.token).catch(() =>
          router.push("/login")
        );
        setReservations(reservations.reservations);
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (!loading)
    return (
      <div className="container mx-auto py-14">
        {!isOperator ? <GoBack /> : <></>}

        <h1 className="text-4xl font-bold italic">Reservations</h1>

        <p className="text-lg text-zinc-600">
          Here you can see all the reservations
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8">
          {Array.isArray(reservations) ? (
            reservations.map((reservation, i) => (
              <Link
                href="/reservations/[id]"
                as={`/reservations/${reservation.id}`}
                key={i}
                className="flex p-4 bg-white shadow-2xl gap-4"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <IoPersonCircleSharp className="text-2xl text-zinc-700" />
                    <h1 className="text-lg text-zinc-700">
                      {reservation.name} {reservation.surname}
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoMail className="text-2xl text-zinc-700" />
                    <h1 className="text-lg text-zinc-700">
                      {reservation.email}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div className="flex items-center gap-1">
                    <IoWalkSharp className="text-2xl text-zinc-700" />
                    <h1 className="text-lg text-zinc-700">
                      {reservation.guests} guests
                    </h1>
                  </div>
                </div>

                <div className="grow flex flex-row-reverse items-center">
                  <IoArrowForwardCircle className=" text-3xl" />
                </div>
              </Link>
            ))
          ) : (
            <></>
          )}
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

export default Reservations;
