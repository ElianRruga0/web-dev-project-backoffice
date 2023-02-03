import GoBack from "@/components/GoBack";
import { getDestionations } from "@/queries/destinations";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Destinations: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [destinations, setDestinations] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const destinations = await getDestionations();
      setDestinations(destinations.destinations);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-14">
      <GoBack />

      <h1 className="text-4xl font-bold italic">Destinations</h1>

      <p className="text-lg text-zinc-600">
        Here you can see all the destinations
      </p>

      <div className="flex flex-col gap-6 mt-8">
        {Array.isArray(destinations) ? (
          destinations.map((destination, i) => (
            <Link
              href="/destinations/[id]"
              as={`/destinations/${destination.id}`}
              key={i}
              className="flex  p-4 bg-white shadow-2xl gap-4"
            >
              <div className="w-1/4 h-60 bg-red-500 relative overflow-hidden rounded-lg shrink-0">
                <Image
                  alt="image"
                  src={`http://161.35.26.84/images/${destination.image}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col gap-4 grow">
                <h1 className="text-3xl font-medium text-zinc-700">
                  {destination.name}
                </h1>

                <p className="text-zinc-700">{destination.description}</p>
              </div>

              <div className="flex items-center justify-center">
                <IoSearchCircleSharp className="text-6xl" />
              </div>
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Destinations;
