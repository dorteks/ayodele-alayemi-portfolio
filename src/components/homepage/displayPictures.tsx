import React from "react";
import Image from "next/image";

const DisplayPictures = () => {
  return (
    <div className="h-[350px] w-full py-4 my-10 tap-transparent">
      <div className=" relative flex flex-row items-center justify-center  gap-8">
        {/* <Image
          src=""
          width={300}
          height={330}
          alt="picture display"
          className="h-[330px] w-[300px] rounded-2xl bg-green-500 rotate-3"
        /> */}
        <Image
          src="/assets/frontend.jpg"
          width={300}
          height={330}
          alt="picture display"
          className="h-[330px] w-[300px] rounded-2xl bg-green-500 -rotate-3 "
        />
        {/* <Image
          src=""
          width={300}
          height={330}
          alt="picture display"
          className="h-[330px] w-[300px] rounded-2xl bg-green-500 rotate-2"
        /> */}
        {/* <Image
          src=""
          width={300}
          height={330}
          alt="picture display"
          className="h-[330px] w-[300px] rounded-2xl bg-green-500 rotate-3"
        /> */}
        {/* <Image
          src=""
          width={300}
          height={330}
          alt="picture display"
          className="h-[330px] w-[300px] rounded-2xl bg-green-500 -rotate-3 "
        /> */}
      </div>
    </div>
  );
};

export default DisplayPictures;
