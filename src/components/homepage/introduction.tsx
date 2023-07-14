import React from "react";
import Link from "next/link";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[680px] tap-transparent">
      <h1 className="text-3xl sm:text-[38px] md:text-[46px] lg:text-5xl font-semibold text-[#27272A] sm:leading-[40px] md:leading-[50px] lg:leading-[3.5rem] ">
        Sofware designer, lover of music, and violinist.
      </h1>
      <p className="text-[#52525B] text-base leading-7 ">
        I’m Ayodele, a software designer based in Lagos, Nigeria. I design,
        develop, and deploy web applications. I’m aspiring to be a fullstack
        developer. I’m a music instructor and loves to play the violin.
      </p>

      <div className="flex flex-row gap-6 mb-10 ">
        {[
          {
            id: 1,
            link: "https://linkedin.com/",
            iconSrc: "/assets/linkedin-blackfill.png",
          },
          {
            id: 2,
            link: "https://instagram.com/",
            iconSrc: "/assets/instagram-blackfill.svg",
          },
          {
            id: 3,
            link: "https://github.com/",
            iconSrc: "/assets/github-blackfill.png",
          },
          {
            id: 4,
            link: "https://twitter.com/",
            iconSrc: "/assets/twitter-blackfill.svg",
          },
        ].map((i) => {
          return (
            <div key={i.id}>
              <Link href={i.link}>
                <Image
                  width={8}
                  height={8}
                  alt="socials"
                  src={i.iconSrc}
                  className="w-[20px] h-[20px] "
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Introduction;
