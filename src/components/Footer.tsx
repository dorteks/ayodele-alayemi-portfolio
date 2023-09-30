import React from "react";

const Footer = () => {
  return (
    <div className="w-full relative bottom-0 tap-transparent">
      <div className="pt-10 pb-14 px-0 md:px-12  bg-white flex flex-col md:flex-row gap-6 items-center sm:justify-between border-t-[1px] border-[#e5e7eb] ">
        <div className="flex gap-x-6 text-sm font-medium leading-6 text-[#27272A]">
          <a className="hover:text-[#14B8A6]" href="/about">
            About
          </a>
          <a className="hover:text-[#14B8A6]" href="/projects">
            Projects
          </a>
          <a className="hover:text-[#14B8A6]" href="/uses">
            Uses
          </a>
        </div>
        <div className="text-sm leading-6 text-[#A1A1AA]    ">
          &copy; 2023 Ayodele Alayemi, All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
