import GoBack from "@/components/GoBack";
import { NextPage } from "next";
import React from "react";
import {
  IoMail,
  IoCallSharp,
  IoWalkSharp,
  IoBicycleSharp,
} from "react-icons/io5";

const Reservation: NextPage = () => {
  return (
    <div className="container mx-auto py-14">
      <GoBack />

      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold italic outline-none bg-transparent">
          Elian Rruga
        </h1>
        <button className="bg-red-800 px-4 py-2 text-white text-center rounded-lg uppercase font-bold text-xl">
          Delete
        </button>
      </div>

      <div className="grid grid-cols-4 my-8 gap-4">
        <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-4 py-2">
          <IoMail className="text-2xl text-zinc-700" />
          <h1 className="text-lg text-zinc-700">test@gmail.com</h1>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-4 py-2">
          <IoCallSharp className="text-2xl text-zinc-700" />
          <h1 className="text-lg text-zinc-700">0699999999</h1>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-4 py-2">
          <IoWalkSharp className="text-2xl text-zinc-700" />
          <h1 className="text-lg text-zinc-700">5 guests</h1>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-4 py-2">
          <IoBicycleSharp className="text-2xl text-zinc-700" />
          <h1 className="text-lg text-zinc-700">Hiking on mounten</h1>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
