import React from "react";
import Image from "next/image";

const DisplayPictures = () => {
  return (
    <div className="h-[350px] w-full py-4 my-10  ">
      <div className=" relative flex flex-row items-center justify-center  gap-8">
        <Image
          src=""
          width={300}
          height={330}
          alt="picture display"
          className="h-[330px] w-[300px] rounded-2xl bg-green-500"
        />
        <Image
          src=""
          width={300}
          height={330}
          alt="picture display"
          className="h-[330px] w-[300px] rounded-2xl bg-green-500"
        />
      </div>
    </div>
  );
};

export default DisplayPictures;
