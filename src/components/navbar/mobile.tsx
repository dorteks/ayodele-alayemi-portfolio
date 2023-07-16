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
    <div className="h-[60px] pt-10 relative z-20 bg-[#FFFFFFE6] tap-transparent py-7 flex md:hidden items-center justify-between tap-transparent">
      <Link href="/" className="ml-4">
        <Image
          width={36}
          height={35}
          alt="avatar"
          src="/assets/profile.jpeg"
          className="rounded-full h-[50px] w-[50px] "
        />
      </Link>

      <div className="flex gap-7 items-center sm:gap-12 mx-[10px]">
        {/* hamburger menu for mobile */}
        <div>
          <Image
            width={28}
            height={28}
            alt="togge menu"
            onClick={toggleOpen}
            src="/assets/hamburger.png"
          />

          {isOpen && (
            <div
              onClick={toggleOpen}
              className="absolute z-40 left-0 top-0 h-[90vh] w-full p-8 rounded bg-[#FFFFFF]"
            >
              <div className="flex flex-col items-center gap-10 ">
                <Image
                  alt=""
                  width={25}
                  height={25}
                  onClick={toggleOpen}
                  src="/assets/close.svg"
                  className="mt-2 flex self-end mr-6 sm:mr-[55px] md:mr-[65px] "
                />
                <div className="flex flex-col gap-5 text-center text-sm font-semibold text-[#27272A]">
                  {[
                    { id: 1, link: "/about", text: "About" },
                    { id: 2, link: "/articles", text: "Articles" },
                    { id: 3, link: "/projects", text: "Projects" },
                    { id: 4, link: "/uses", text: "Uses" },
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
              ? "relative bg-[#717171] rounded-full w-[56px] h-8 border-[1px] flex items-center justify-center"
              : "relative bg-black rounded-full w-[56px] h-8 border-[1px] flex items-center justify-center "
          }`}
        >
          <div
            onClick={handleONNavigation}
            className={`${
              ONIsNavigated
                ? "w-[15px] ml-[3px] bg-white text-white rounded-full px-[13px] py-[1px] absolute left-0 z-20"
                : "w-[15px] ml-[3px] bg-[#222222]  text-[#222222] rounded-full px-[13px] py-[1px] absolute left-0"
            }`}
          >
            X
          </div>
          <div
            onClick={handleOFFNavigation}
            className={`${
              ONIsNavigated
                ? "w-[15px] mr-[3px] bg-[#717171]  text-[#717171] rounded-full px-[12px] py-[px] absolute right-0 "
                : "w-[15px] mr-[3px] bg-white text-[#717171] rounded-full px-[13px] absolute right-0 z-20"
            }`}
          >
            <div className="relative -left-4 px-[10px] py-[7px] ">
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
