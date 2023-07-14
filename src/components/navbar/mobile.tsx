"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="relative z-20 bg-[#FFFFFFE6] tap-transparent py-7 flex md:hidden items-center justify-between">
      <Link href="/" className="bg-red-500 ml-3 ">
        <Image src="" alt="avatar" width={36} height={35} />
      </Link>

      <div className="flex gap-7 sm:gap-12 mx-[10px]">
        {/* hamburger menu for mobile */}
        <div>
          <Image
            width={33}
            height={33}
            alt="togge menu"
            onClick={toggleOpen}
            className="bg-red-500"
            src="/assets/hamburger.png"
          />

          {isOpen && (
            <div
              onClick={toggleOpen}
              className="absolute z-40 left-0 top-16 h-[90vh] w-full p-8 rounded bg-[#FFFFFF]"
            >
              <div className="flex flex-col items-center gap-10 ">
                <Image
                  alt=""
                  width={25}
                  height={25}
                  onClick={toggleOpen}
                  src="/assets/close.svg"
                  className="mt-8 flex self-end mr-6 sm:mr-[55px] md:mr-[65px] "
                />
                <div className="flex flex-col gap-5 text-center text-sm font-semibold text-[#27272A]">
                  {[
                    { id: 1, link: "/about", text: "About" },
                    { id: 2, link: "/articles", text: "Articles" },
                    { id: 3, link: "/projects", text: "Projects" },
                    { id: 4, link: "/speaking", text: "Speaking" },
                    { id: 5, link: "/uses", text: "Uses" },
                  ].map((i) => (
                    <Link
                      key={i.id}
                      href={i.link}
                      className="px-16 py-4 bg-[inherit] hover:border-[0.5px] hover:border-[#e5ede7] hover:rounded-md text-[#27272A] hover:text-[#14b8a6] "
                    >
                      {i.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* hamburger logic ends here */}
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
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
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

export default MobileNavbar;
