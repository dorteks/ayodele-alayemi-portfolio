import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const DisplayPictures = () => {
  return (
    <Marquee className="flex flex-row gap-20">
      <div className="flex flex-row gap-16 items-center h-[350px] my-10 tap-transparent ">
        <Image
          src="/assets/2020react-next.webp"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit rotate-3"
        />
        <Image
          src="/assets/frontend-dev.jpg"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit -rotate-3 "
        />
        <Image
          src="/assets/react-next.png"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit rotate-2"
        />
        <Image
          src="/assets/2020react-next.webp"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit rotate-3"
        />
        <Image
          src="/assets/frontend-dev.jpg"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit -rotate-3 "
        />
        <Image
          src="/assets/react-next.png"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit rotate-2"
        />
        <Image
          src="/assets/2020react-next.webp"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit rotate-3"
        />
        <Image
          src="/assets/frontend-dev.jpg"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit -rotate-3 "
        />
        <Image
          src="/assets/react-next.png"
          width={300}
          height={330}
          alt="picture display"
          className="h-[310px] w-[300px] rounded-2xl bg-inherit rotate-2"
        />
      </div>
    </Marquee>
  );
};

export default DisplayPictures;
