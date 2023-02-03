import GoBack from "@/components/GoBack";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Activities: NextPage = () => {
  return (
    <div className="container mx-auto py-14">
      <GoBack />
      <h1 className="text-4xl font-bold italic">Activities</h1>

      <p className="text-lg text-zinc-600">
        Here you can see all the activities
      </p>

      <div className="flex flex-col gap-6 mt-8">
        {Array.from(Array(10).keys()).map((_, i) => (
          <Link
            href="/activities/[id]"
            as={`/activities/${1}`}
            key={i}
            className="flex  p-4 bg-white shadow-2xl gap-4"
          >
            <div className="w-1/4 h-60 bg-red-500 relative overflow-hidden rounded-lg shrink-0"></div>

            <div className="flex flex-col gap-4 grow">
              <h1 className="text-3xl font-medium text-zinc-700">
                Hiking on mountain
              </h1>

              <p className="text-zinc-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae hic molestias veritatis libero officia alias vero
                eius! Earum, voluptates maiores? Asperiores nostrum, ipsam ut
                sapiente ipsum aperiam animi eaque perspiciatis amet aliquid
                minima maiores, veritatis nemo culpa molestiae exercitationem
                mollitia commodi deleniti enim delectus! Nostrum eveniet
                excepturi aliquam aut quibusdam. Nemo, natus? Quam, ducimus id
                ad debitis doloribus, nihil nesciunt corrupti veniam repudiandae
                numquam nisi soluta eligendi laudantium enim itaque temporibus
                accusamus excepturi sit, delectus perspiciatis officia
                accusantium earum! Architecto dolorem quo eos reiciendis
                molestiae vel porro sint ab tempora.
              </p>

              <h1 className="text-xl text-zinc-700 underline">
                30/12/2023 10:00 AM
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <IoSearchCircleSharp className="text-6xl" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Activities;
