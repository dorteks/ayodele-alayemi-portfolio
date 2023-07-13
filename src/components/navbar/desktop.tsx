"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const DesktopNavbar = () => {
  const [hasNavigated, setHasNavigated] = useState(false);
  const [ONIsNavigated, setONIsNavigated] = useState(true);
  const [OFFIsNavigated, setOFFIsNavigated] = useState(false);

  const handleONNavigation = (e: any) => {
    e.preventDefault();
    setHasNavigated(true);
    setONIsNavigated(!ONIsNavigated);
    setOFFIsNavigated(!OFFIsNavigated);
  };

  const handleOFFNavigation = (e: any) => {
    e.preventDefault();
    setHasNavigated(true);
    setONIsNavigated(!ONIsNavigated);
    setOFFIsNavigated(!OFFIsNavigated);
  };

  return (
    <div className="relative z-20 bg-[#FFFFFF]">
      <div className="hidden md:flex flex-row justify-between pt-8 pb-6 px-12">
        <Link href="/" className="bg-blue-500">
          <Image src="" alt="avatar" width={36} height={35} />
        </Link>

        <div className="px-3 flex text-sm font-semibold rounded-full border-[1px] border-[#e5e7eb] shadow-md shadow-[#0000000d] hover:shadow-[#00000014]">
          {[
            { id: 1, link: "/about", text: "About" },
            { id: 2, link: "", text: "Articles" },
            { id: 3, link: "", text: "Projects" },
            { id: 4, link: "", text: "Speaking" },
            { id: 5, link: "", text: "Uses" },
          ].map((i) => (
            <Link
              key={i.id}
              href={i.link}
              className="px-3 py-2 text-[#27272A] hover:text-[#14b8a6]"
            >
              {i.text}
            </Link>
          ))}
        </div>

        <button
          className={`${
            ONIsNavigated
              ? "relative bg-[#717171] rounded-full w-[56px] h-9 border-[2px] flex items-center justify-center"
              : "relative bg-black rounded-full w-[56px] h-9 border-[2px] flex items-center justify-center "
          }`}
        >
          <div
            onClick={handleONNavigation}
            className={`${
              ONIsNavigated
                ? "w-[15px] ml-[3px] bg-white text-white rounded-full px-[13px] py-[2px] absolute left-0 z-20"
                : "w-[15px] ml-[3px] bg-[#222222]  text-[#222222] rounded-full px-[13px] py-[2px] absolute left-0"
            }`}
          >
            X
          </div>
          <div
            onClick={handleOFFNavigation}
            className={`${
              ONIsNavigated
                ? "w-[15px] mr-[3px] bg-[#717171]  text-[#717171] rounded-full px-[13px] py-[2px] absolute right-0 "
                : "w-[15px] mr-[3px] bg-white text-[#717171] rounded-full px-[14px] absolute right-0 z-20"
            }`}
          >
            <div className="relative -left-4 px-[10px] py-[8px] ">
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  ONIsNavigated ? "stroke-red" : "stroke-black"
                } block fill-none h-3 w-3  stroke-[5px] overflow-visible  `}
              >
                <path fill="none" d="m4 16.5 8 8 16-16"></path>
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
