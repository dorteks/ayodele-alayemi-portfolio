import React from "react";

const Footer = () => {
  return (
    <div className="w-full relative bottom-0">
      <div className="pt-10 pb-14 px-0 md:px-12  bg-white flex flex-col md:flex-row gap-6 items-center sm:justify-between border-t-[1px] border-[#e5e7eb] ">
        <div className="flex gap-x-6 text-sm font-medium leading-6 text-[#27272A] ">
          <a href="/about">About</a>
          <a href="">Projects </a>
          <a href="">Speaking</a>
          <a href="">Uses</a>
        </div>
        <div className="text-sm leading-6 text-[#A1A1AA]    ">
          &copy; 2023 Ayodele Alayemi, All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
