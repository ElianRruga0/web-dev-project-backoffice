import GoBack from "@/components/GoBack";
import {
  getDestionation,
  deleteDestionation,
  updateDestionation,
} from "@/queries/destinations";
import { userAtom } from "@/state";
import { useAtomValue } from "jotai";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { IoPencilSharp } from "react-icons/io5";

const Destination: NextPage<{ id: any }> = ({ id }) => {
  const router = useRouter();
  const user = useAtomValue(userAtom);
  const [loading, setLoading] = useState<boolean>(true);
  const [destination, setDestination] = useState<any>({});

  const [dName, setDname] = useState<any>();
  const dNameRef = useRef<HTMLInputElement>(null);

  const [dDescription, setDdescription] = useState<any>();
  const dDescriptionRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const destination = await getDestionation(id);

      setDestination(destination.destination);
      setDname(destination.destination.name);
      setDdescription(destination.destination.description);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    await deleteDestionation(id, user.token)
      .then(() => router.push("/destinations"))
      .catch(() => router.push("/login"));
  };

  const handleUpdate = async () => {
    await updateDestionation(id, user.token, {
      name: dName,
      description: dDescription,
    })
      .then(() => router.reload())
      .catch(() => router.push("/login"));
  };

  if (!loading && destination)
    return (
      <div className="container mx-auto py-14">
        <GoBack />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="bg-white p-2 rounded"
              onClick={() => dNameRef.current?.focus()}
            >
              <IoPencilSharp className="text-2xl " />
            </button>
            <input
              className="text-4xl font-bold italic outline-none bg-transparent"
              value={dName}
              onChange={(e) => setDname(e.target.value)}
              ref={dNameRef}
            />
          </div>

          <button
            onClick={handleDelete}
            className="bg-red-800 px-4 py-2 text-white text-center rounded-lg uppercase font-bold text-xl"
          >
            Delete
          </button>
        </div>

        <div className="w-full h-[620px] bg-gray-300 rounded-lg relative overflow-hidden my-8">
          <Image
            alt="image"
            src={`http://161.35.26.84/images/${destination.image}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <button
          className="bg-white p-2 rounded"
          onClick={() => dDescriptionRef.current?.focus()}
        >
          <IoPencilSharp className="text-2xl " />
        </button>

        <textarea
          className="w-full h-80 p-2  outline-none bg-transparent "
          value={dDescription}
          onChange={(e) => setDdescription(e.target.value)}
          ref={dDescriptionRef}
        />

        <button
          onClick={handleUpdate}
          className="w-full py-3 bg-black rounded-lg text-white text-center uppercase text-xl tracking-widest"
        >
          Save changes
        </button>
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

export default Destination;
