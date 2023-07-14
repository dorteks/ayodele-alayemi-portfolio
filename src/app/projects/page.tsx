import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Ayodele Alayemi",
  description: "My Projects",
};

const Projects = () => {
  return (
    <div className="px-3 sm:px-0 tap-transparent">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#27272A] font-semibold max-w-[670px]  ">
        Things I’ve made
      </h1>

      <p className="mt-6 mb-9 text-base text-zinc-600 max-w-[670px] ">
        I’ve worked on tons of little projects over the years but these are the
        ones that I built from scratch and I’m most proud of. I look forward to
        building a lot of interesting UIs in the future. I’m constantly working
        on each of my previous projects, updating it with newer technologies to
        improve its user experience.
      </p>

      <div className="grid sm:grid-cols-2 sm:grid-rows-3  lg:grid-cols-3 lg:grid-rows-3 gap-4 ">
        {[
          {
            id: 6,
            rounded: "rounded-full",
            logoSrc: "/assets/profile.jpeg",
            projectTitle: "Ayodele Alayemi - Portfolio",
            projectDescription: "Personal profile and portfolio",
            projectLink: "https://ayodele-alayemi-portfolio.vercel.app/",
          },
          {
            id: 1,
            logoSrc: "/assets/airbnb-logo.png",
            projectTitle: " Airbnb Website Clone",
            projectDescription:
              " Airbnb is an online marketplace that connects people who want to rent out their property with people who are looking for accommodations in specific locales. Airbnb offers people an easy, relatively stress-free way to earn some income from their property.",
            projectLink: "https://ayodele-alayemi-fintech-fe.vercel.app/",
          },
          {
            id: 2,
            logoSrc: "/assets/lendsqr-logo.svg",
            projectTitle: " Lendsqr Fintech Web App",
            projectDescription:
              "Manage and optimize your lending process using our extensively configurable loan decisioning workflow and easily adapt your offerings for your best customers.",
            projectLink: "https://ayodele-alayemi-fintech-fe.vercel.app/",
          },
          {
            id: 3,
            logoSrc: "/assets/bals-logo.svg",
            projectTitle: "BALS University",
            projectDescription: "E-Commerce website.",
            projectLink: "https://bals-university.vercel.app/",
          },
          {
            id: 4,
            logoSrc: "/assets/bds-logo.svg",
            projectTitle: "Boundless Digital Service",
            projectDescription: "SAAS Website",
            projectLink: "https://boundless-digital-services.vercel.app/",
          },
          {
            id: 5,
            logoSrc: "/assets/hernalytics-logo.svg",
            projectTitle: "Nigeria Election Result (Sample)",
            projectDescription:
              "An election result website displaying the candidates contesting for a positon and the candidate with the highest number of votes in each state.   ",
            projectLink:
              "https://ayodele-alayemi-post-election-data.vercel.app/",
          },
        ].map((i) => (
          <div
            key={i.id}
            className="mt-10 flex flex-col w-[auto] max-w-[500px] sm:max-w-[350px] px-3 py-3"
          >
            <div className="h-[50px] flex items-center justify-start">
              <Image
                src={i.logoSrc}
                alt="project logo"
                width={48}
                height={48}
                className={`w-[auto] h-[auto] ${i.rounded}`}
              />
            </div>
            <div className="h-auto sm:h-[220px]">
              <p className="text-[18px] font-semibold mt-6">{i.projectTitle}</p>
              <p className="text-sm text-zinc-600 mt-2 text-ellipses overflow-hidden">
                {i.projectDescription}
              </p>
            </div>

            <a
              href={i.projectLink}
              className="w-[70px] py-1 mt-2 italic hover:text-teal-500 "
            >
              Visit site
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
