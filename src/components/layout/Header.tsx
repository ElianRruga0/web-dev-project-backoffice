import Link from "next/link";
import React, { FC } from "react";
import { IoTicketSharp, IoBicycleSharp, IoMapSharp } from "react-icons/io5";

const Header: FC = () => {
  return (
    <div className="w-full py-8 px-5 bg-black flex gap-4 items-center justify-between">
      <Link href="/" className="text-white text-2xl">
        Admin Panel
      </Link>

      <div className="grow flex flex-row-reverse items-center gap-8">
        <div className="flex items-center gap-2 group">
          <div className="group-hover:bg-white p-2 rounded-full">
            <IoTicketSharp className="text-white text-2xl group-hover:text-black" />
          </div>

          <Link
            href="/reservations"
            className="text-white text-xl uppercase group-hover:underline"
          >
            Reservations
          </Link>
        </div>

        <div className="flex items-center gap-2 group">
          <div className="group-hover:bg-white p-2 rounded-full">
            <IoBicycleSharp className="text-white text-2xl group-hover:text-black" />
          </div>

          <Link
            href="/activities"
            className="text-white text-xl uppercase group-hover:underline"
          >
            Activities
          </Link>
        </div>

        <div className="flex items-center gap-2 group">
          <div className="group-hover:bg-white p-2 rounded-full">
            <IoMapSharp className="text-white text-2xl group-hover:text-black" />
          </div>

          <Link
            href="/destinations"
            className="text-white text-xl uppercase group-hover:underline"
          >
            Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
