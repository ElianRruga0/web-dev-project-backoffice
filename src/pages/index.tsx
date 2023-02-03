import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IoBicycleSharp,
  IoMapSharp,
  IoTicketSharp,
  IoArrowForwardCircle,
  IoPersonCircleSharp,
  IoMail,
  IoWalkSharp,
} from "react-icons/io5";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  if (!loading)
    return (
      <div className="container mx-auto py-14">
        <h1 className="text-4xl font-bold italic">Dashboard</h1>
        <p className="text-lg text-zinc-600">
          Here you can see general information
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-2xl p-4 rounded flex flex-col gap-4 h-fit">
            <div className="flex items-center gap-2">
              <IoMapSharp className="text-2xl" />

              <h1 className="text-xl font-medium">
                Destinations{" "}
                <span className="text-red-900 font-semibold">( 32 )</span>
              </h1>

              <Link
                href="/destinations"
                className="self-end underline text-blue-900"
              >
                see all
              </Link>
            </div>

            <h1 className="mb-4">Last 5 destinations added:</h1>

            {Array.from(Array(5).keys()).map((_, i) => (
              <Link
                key={i}
                href="/destinations/[id]"
                as={`/destinations/${1}`}
                className="flex items-center gap-2 border-b border-b-black py-2 last:border-b-0"
              >
                <div className="w-14 h-14 bg-red-500 rounded-lg"></div>

                <h1 className="text-2xl text-zinc-700 uppercase tracking-widest">
                  Durres
                </h1>

                <div className="grow flex flex-row-reverse">
                  <IoArrowForwardCircle className=" text-3xl" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-white shadow-2xl p-4 rounded flex flex-col gap-4 h-fit">
            <div className="flex items-center gap-2">
              <IoBicycleSharp className="text-2xl" />

              <h1 className="text-xl font-medium">
                Activities{" "}
                <span className="text-red-900 font-semibold">( 12 )</span>
              </h1>

              <Link
                href="/activities"
                className="self-end underline text-blue-900"
              >
                see all
              </Link>
            </div>

            <h1 className="mb-4">Last 5 activities added:</h1>

            {Array.from(Array(5).keys()).map((_, i) => (
              <Link
                key={i}
                href="/activities/[id]"
                as={`/activities/${1}`}
                className="flex items-center gap-2 border-b border-b-black py-2 last:border-b-0"
              >
                <div className="w-14 h-14 bg-red-500 rounded-lg flex-none"></div>

                <div className="flex flex-col justify-between flex-none shrink">
                  <h1 className="text-2xl text-zinc-700 uppercase tracking-widest leading-6  trunacte">
                    Hiking on mountain
                  </h1>

                  <h1 className="text-lg text-zinc-700">30/02/2023</h1>
                </div>

                <div className="grow flex flex-row-reverse">
                  <IoArrowForwardCircle className=" text-3xl" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-white shadow-2xl p-4 rounded flex flex-col gap-4 h-fit">
            <div className="flex items-center gap-2">
              <IoTicketSharp className="text-2xl" />

              <h1 className="text-xl font-medium">
                Reservations{" "}
                <span className="text-red-900 font-semibold">( 43 )</span>
              </h1>

              <Link
                href="/reservations"
                className="self-end underline text-blue-900"
              >
                see all
              </Link>
            </div>

            <h1 className="mb-4">Last 5 reservations made:</h1>

            {Array.from(Array(5).keys()).map((_, i) => (
              <Link
                key={i}
                href="/reservations/[id]"
                as={`/reservations/${1}`}
                className="flex  gap-2 border-b border-b-black py-2 last:border-b-0"
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
      </div>
    );
  else return <h1 className="text-3xl font-bold underline">Loading</h1>;
}
