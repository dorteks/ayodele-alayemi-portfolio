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
            id: 1,
            rounded: "rounded-full",
            logoSrc: "/assets/profile.jpeg",
            projectTitle: "Ayodele Alayemi - Portfolio",
            projectDescription:
              "I’m Ayodele, a software designer based in Lagos, Nigeria. I design, develop, and deploy web applications. I’m aspiring to be a fullstack developer. I’m a music instructor and loves to play the violin.",
            projectLink: "https://ayodele-alayemi-portfolio.vercel.app/",
          },
          {
            id: 2,
            logoSrc: "/assets/airbnb-logo.png",
            projectTitle: " Airbnb Website Clone",
            projectDescription:
              " Airbnb is an online marketplace that connects people who want to rent out their property with people who are looking for accommodations in specific locales. Airbnb offers people an easy, relatively stress-free way to earn some income from their property.",
            projectLink: "https://ayodele-alayemi-airbnb-clone.vercel.app/",
          },
          {
            id: 3,
            logoSrc: "/assets/lendsqr-logo.svg",
            projectTitle: " Lendsqr Fintech Web App",
            projectDescription:
              "Manage and optimize your lending process using our extensively configurable loan decisioning workflow and easily adapt your offerings for your best customers.",
            projectLink: "https://ayodele-alayemi-fintech-fe.vercel.app/",
          },
          {
            id: 4,
            logoSrc: "/assets/bals-logo.svg",

            projectTitle: "BALS University",
            projectDescription:
              "BALS University is an all-encompassing e-learning platform geared towards your growth and success in the digital space with simplified and comprehensible lessons. It is specially made for you and Africans who want to rule the digital space with practical knowledge",
            projectLink: "https://bals-university.vercel.app/",
          },
          {
            id: 5,
            logoSrc: "/assets/bds-logo.svg",
            left: "-left-9",
            projectTitle: "Boundless Digital Services (BDS)",
            projectDescription:
              "Services rendered on BDS ranges from content strategy to drafting marketing campaigns , pre-qualified Advertising campaigns, community management and warmup, email marketing, ghost writing, social media funnel setup, search engine and social media branding.",
            projectLink: "https://boundless-digital-services.vercel.app/",
          },
          {
            id: 6,
            logoSrc: "/assets/hernalytics-logo.svg",
            projectTitle: "Nigeria Election Result (Sample)",
            projectDescription:
              "An election result website displaying the candidates contesting for the presidential position and the candidate with the highest number of votes in each state.",
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
                width={48}
                height={48}
                src={i.logoSrc}
                alt="project logo"
                className={`relative w-[auto] h-[auto] ${i.rounded} ${i.left} `}
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
              target="_blank"
              className="flex items-center gap-[2px] w-[90px] py-1 mt-2 text-sm font-medium text-[#14B8A6]"
            >
              Visit site
              <span>
                <svg
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
