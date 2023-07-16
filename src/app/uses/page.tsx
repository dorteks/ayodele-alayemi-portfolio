import React from "react";
import Design from "./design";
import { Metadata } from "next";
import Hobbies from "./hobbies";
import WorkStation from "./workStation";
import Productivity from "./productivity";
import DevelopmentTools from "./developmentTools";

export const metadata: Metadata = {
  title: "Uses - Ayodele Alayemi",
  description: "My Gadgets",
};

const Uses = () => {
  return (
    <div className="px-4 sm:px-0 tap-transparent">
      <h1 className="text-2xl sm:text-4xl md:text-5xl text-[#27272A] font-semibold max-w-[670px]  ">
        Technologies I use, gadjets I love, musical instruments I play, my
        hobbies and other things I recommend
      </h1>

      <p className="mt-6 mb-9 text-base text-zinc-600 max-w-[670px] ">
        There are a number of tools, & software that helps me to stay
        productive. Here’s a list of all of the things I currently use to build
        software.
      </p>

      <WorkStation />
      <DevelopmentTools />
      <Design />
      <Productivity />
      <Hobbies />
    </div>
  );
};

export default Uses;
