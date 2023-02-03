import GoBack from "@/components/GoBack";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import {
  IoArrowForwardCircle,
  IoMail,
  IoPersonCircleSharp,
  IoWalkSharp,
} from "react-icons/io5";

const Reservations: NextPage = () => {
  return (
    <div className="container mx-auto py-14">
      <GoBack />

      <h1 className="text-4xl font-bold italic">Reservations</h1>

      <p className="text-lg text-zinc-600">
        Here you can see all the reservations
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {Array.from(Array(10).keys()).map((_, i) => (
          <Link
            href="/reservations/[id]"
            as={`/reservations/${1}`}
            key={i}
            className="flex p-4 bg-white shadow-2xl gap-4"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <IoPersonCircleSharp className="text-2xl text-zinc-700" />
                <h1 className="text-lg text-zinc-700">Elian Rruga</h1>
              </div>

              <div className="flex items-center gap-1">
                <IoMail className="text-2xl text-zinc-700" />
                <h1 className="text-lg text-zinc-700">test@gmail.com</h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <div className="flex items-center gap-1">
                <IoWalkSharp className="text-2xl text-zinc-700" />
                <h1 className="text-lg text-zinc-700">5 guests</h1>
              </div>
            </div>

            <div className="grow flex flex-row-reverse items-center">
              <IoArrowForwardCircle className=" text-3xl" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
