import GoBack from "@/components/GoBack";
import {
  deleteActivity,
  getActivity,
  updateActivity,
} from "@/queries/activities";
import { getActivityTypes } from "@/queries/activity_types";
import { getDestionations } from "@/queries/destinations";
import { userAtom } from "@/state";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { IoPencilSharp } from "react-icons/io5";

const Activity: NextPage<{ id: any }> = ({ id }) => {
  const router = useRouter();
  const user = useAtomValue(userAtom);
  const [loading, setLoading] = useState<boolean>(true);
  const [destinations, setDestinations] = useState<any>([]);
  const [activityTypes, setActivityTypes] = useState<any>([]);

  const [activity, setActivity] = useState<any>({});

  const [aName, setAname] = useState<any>();
  const aNameRef = useRef<HTMLInputElement>(null);

  const [aDescription, setAdescription] = useState<any>();
  const aDescriptionRef = useRef<HTMLTextAreaElement>(null);

  const [destionationId, setDestionationId] = useState<any>();
  const [activityTypeId, setActivityTypeId] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const activity = await getActivity(id);
      const destinations = await getDestionations();
      const activityTypes = await getActivityTypes();

      setActivityTypes(activityTypes.activity_types);
      setDestinations(destinations.destinations);
      setActivity(activity.activity[0]);
      setAname(activity.activity[0].name);
      setAdescription(activity.activity[0].description);
      setDestionationId(activity.activity[0].destination.id);
      setActivityTypeId(activity.activity[0].activity_type.id);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    await deleteActivity(id, user.token)
      .then(() => router.push("/activities"))
      .catch(() => router.push("/login"));
  };

  const handleUpdate = async () => {
    await updateActivity(id, user.token, {
      name: aName,
      description: aDescription,
      destination_id: destionationId,
      activity_id: activityTypeId,
    })
      .then(() => router.reload())
      .catch(() => router.push("/login"));
  };

  if (!loading && activity)
    return (
      <div className="container mx-auto py-14">
        <GoBack />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="bg-white p-2 rounded"
              onClick={() => aNameRef.current?.focus()}
            >
              <IoPencilSharp className="text-2xl " />
            </button>
            <input
              className="text-4xl font-bold italic outline-none bg-transparent"
              value={aName}
              onChange={(e) => setAname(e.target.value)}
              ref={aNameRef}
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
            src={`http://161.35.26.84/images/${activity.image}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <button
          onClick={() => aDescriptionRef.current?.focus()}
          className="bg-white p-2 rounded"
        >
          <IoPencilSharp className="text-2xl " />
        </button>

        <textarea
          className="w-full h-80 p-2 outline-none bg-transparent "
          value={aDescription}
          onChange={(e) => setAdescription(e.target.value)}
          ref={aDescriptionRef}
        />

        <div className="grid grid-cols-2 mb-8">
          <div className="flex flex-wrap items-center gap-y-4 gap-x-8">
            {/* <div className="w-full">
            <button className="bg-white p-2 rounded">
              <IoPencilSharp className="text-2xl " />
            </button>
          </div> */}
            <div>
              <h1>Starts on:</h1>
              <h1 className="text-lg underline">
                {dayjs(activity.startTime).format("DD/MM/YYYY HH:mm")}
              </h1>
            </div>

            <div>
              <h1>Ends on:</h1>
              <h1 className="text-lg underline">
                {dayjs(activity.endTime).format("DD/MM/YYYY HH:mm")}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-4 gap-x-8 ">
            {/* <div className="w-full">
            <button className="bg-white p-2 rounded">
              <IoPencilSharp className="text-2xl " />
            </button>
          </div> */}
            <div className="flex items-center gap-2">
              <h1>Min. guests:</h1>
              <h1 className="font-bold">{activity.minGuests}</h1>
            </div>

            <div className="flex items-center gap-2">
              <h1>Max. guests:</h1>
              <h1 className="font-bold">{activity.maxGuests}</h1>
            </div>

            <div className="flex items-center gap-2">
              <h1>Current. guests:</h1>
              <h1 className="font-bold">{activity.currentGuests}</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 mb-8">
          <div>
            <h1>Destination:</h1>
            <select
              className="bg-transparent outline-none text-lg"
              onChange={(e) => setDestionationId(e.target.value)}
            >
              {Array.isArray(destinations) ? (
                destinations.map((destination, i) => (
                  <option
                    selected={destination.id === activity.destination.id}
                    value={destination.id}
                  >
                    {destination.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>
          </div>

          <div>
            <h1>Activity type:</h1>
            <select
              className="bg-transparent outline-none text-lg"
              onChange={(e) => setActivityTypeId(e.target.value)}
            >
              {Array.isArray(activityTypes) ? (
                activityTypes.map((activityType, i) => (
                  <option
                    selected={activityType.id === activity.activity_type.id}
                    value={activityType.id}
                  >
                    {activityType.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 my-8"></div>
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

export default Activity;
