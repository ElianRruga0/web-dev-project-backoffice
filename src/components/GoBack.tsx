import { useRouter } from "next/router";
import React, { FC } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const GoBack: FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 mb-4"
    >
      <IoArrowBackCircleSharp className="text-lg" />
      <h1 className="text-lg font-medium">Back</h1>
    </button>
  );
};

export default GoBack;
