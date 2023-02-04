import GoBack from "@/components/GoBack";
import { getActivities } from "@/queries/activities";
import dayjs from "dayjs";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Activities: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [activities, setActivities] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const activities = await getActivities();

      setActivities(activities.activities);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (!loading)
    return (
      <div className="container mx-auto py-14">
        <GoBack />
        <h1 className="text-4xl font-bold italic">Activities</h1>

        <p className="text-lg text-zinc-600">
          Here you can see all the activities
        </p>

        <div className="flex flex-col gap-6 mt-8">
          {Array.isArray(activities) ? (
            activities.map((activity, i) => (
              <Link
                href="/activities/[id]"
                as={`/activities/${activity.id}`}
                key={i}
                className="flex  p-4 bg-white shadow-2xl gap-4"
              >
                <div className="w-1/4 h-60 bg-gray-300 relative overflow-hidden rounded-lg shrink-0">
                  <Image
                    alt="image"
                    src={`http://161.35.26.84/images/${activity.image}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-col gap-4 grow">
                  <h1 className="text-3xl font-medium text-zinc-700">
                    {activity.name}
                  </h1>

                  <p className="text-zinc-700">{activity.description}</p>

                  <h1 className="text-xl text-zinc-700 underline">
                    {dayjs(activity.startTime).format("DD/MM/YYYY HH:mm")}
                  </h1>
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
  else
    return (
      <div className="container mx-auto py-14">
        <h1 className="text-3xl font-bold underline">Loading</h1>
      </div>
    );
};

export default Activities;
