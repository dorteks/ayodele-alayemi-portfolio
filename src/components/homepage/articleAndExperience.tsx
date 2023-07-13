import React from "react";
import Link from "next/link";

const ArticleAndExperience = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 flex flex-col py-5 sm:py-6 lg:py-6 xl:py-0 gap-9 sm:gap-12 ">
        {[
          {
            id: 1,
            date: "July 12, 2023",
            title: "HTML & CSS: The ABC of Front-End Development",
            introduction:
              "HTML and CSS are considered the ABC of front-end development. They are fundamental technologies used to create and style web pages. HTML (Hypertext Markup Language) provides the structure and content of a web page, while CSS (Cascading Style Sheets) is used for styling and layout",
            href: "",
          },
          {
            id: 2,
            date: "July 12, 2023",
            title: "HTML & CSS: The ABC of Front-End Development",
            introduction:
              "HTML and CSS are considered the ABC of front-end development. They are fundamental technologies used to create and style web pages. HTML (Hypertext Markup Language) provides the structure and content of a web page, while CSS (Cascading Style Sheets) is used for styling and layout",
            href: "",
          },
          {
            id: 3,
            date: "July 12, 2023",
            title: "HTML & CSS: The ABC of Front-End Development",
            introduction:
              "HTML and CSS are considered the ABC of front-end development. They are fundamental technologies used to create and style web pages. HTML (Hypertext Markup Language) provides the structure and content of a web page, while CSS (Cascading Style Sheets) is used for styling and layout",
            href: "",
          },
        ].map((i) => (
          <div
            key={i.id}
            className="flex flex-col items-start gap-[12px] p-1 sm:px-3 md:px-16 lg:px-2 xl:p-6  "
          >
            <p className="border-l-[1px] border-zinc-400 text-zinc-400 text-sm leading-6 pl-[14px]  ">
              {i.date}
            </p>
            <p className="text-zinc-800 font-semibold text-base    ">
              {i.title}
            </p>
            <p className="text-zinc-600 text-sm leading-6 ">{i.introduction}</p>
            <Link href={i.href}>
              <p className="flex gap-2 items-center justify-center text-teal-500 font-medium text-sm leading-6">
                Read article
                <span>
                  <svg
                    fill="none"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="ml-1 h-4 w-4 stroke-current"
                  >
                    <path
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 5.75 9.25 8l-2.5 2.25"
                    ></path>
                  </svg>
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className=" w-full sm:w-4/5 md:w-4/5 lg:w-1/2 flex flex-col items-center justify-center lg:self-start py-3 pt-8 lg:pt-6 pl-0 lg:pl-[48px] xl:pl-[90px]">
        <div className="p-3 sm:p-6 w-full min-w-[290px] max-w-[420px] h-auto border-[1px] border-[#ede7eb] rounded-2xl ">
          <p className="flex items-center text-sm gap-3 font-semibold text-zinc-900">
            <span>
              <svg
                fill="none"
                stroke-width="1.5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6 flex-none"
              >
                <path
                  d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                ></path>
                <path
                  d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                ></path>
              </svg>
            </span>{" "}
            Stay up to date
          </p>
          <p className="mt-2 mb-7 text-sm text-zinc-600">
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
          <div className="flex gap-5">
            <input
              placeholder="Email Address"
              className="w-full text-sm border-[1px] border-[#ede7e5] py-2 px-2 rounded-lg  shadow-sm shadow-gray-600"
            />
            <button className="p-3 bg-black text-white text-sm rounded-xl   ">
              Join
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-3 sm:p-6 lg:p-5 mt-8 min-w-[290px] max-w-[420px] h-auto border-[1px] border-[#ede7eb] rounded-2xl ">
          <p className="flex items-center text-sm gap-3 font-semibold text-zinc-900 mb-3 ">
            <span>
              <svg
                fill="none"
                stroke-width="1.5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6 flex-none"
              >
                <path
                  d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                ></path>
                <path
                  d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                ></path>
              </svg>
            </span>{" "}
            Work
          </p>

          {[
            {
              id: 1,
              organisationLogo: "/assets/davtechinvest-logo.png",
              organisation: "DAVTECHINVEST",
              position: "Front-end Developer",
              startYear: "2022",
              endYear: "Present",
            },
            {
              id: 2,
              organisationLogo: "/assets/bals-logo.svg",
              organisation: "BALS University / BDS",
              position: "Front-end Developer",
              startYear: "2022",
              endYear: "2022",
            },
            {
              id: 3,
              organisationLogo: "/assets/solar-shop-logo.jpeg",
              organisation: "The Solar Shop Limited",
              position: "Admin Operation",
              startYear: "2020",
              endYear: "2022",
            },
            // {
            //   id: 4,
            //   organisationLogo: "/assets/solar-shop-logo.jpeg",
            //   organisation: "The Solar Shop Limited",
            //   position: "Admin Operation",
            //   startYear: "2020",
            //   endYear: "2022",
            // },
          ].map((i) => (
            <div
              key={i.id}
              className="flex w-full items-center gap-4 lg:gap-3 2xl:gap-6  h-[48px]"
            >
              <div className="w-[50px] h-[48px] flex items-center justify-center rounded-3xl ">
                <img
                  src={i.organisationLogo}
                  alt="logo"
                  className="w-[35px] h-[35px] "
                />
              </div>

              <div className="flex flex-col gap-1 w-full ">
                <p className="text-[#18181B] text-sm font-semibold">
                  {i.organisation}
                </p>
                <div className="flex justify-between text-[13px] text-[#A1A1AA]">
                  <p className="flex self-start">{i.position}</p>
                  <p className="flex self-end">
                    {i.startYear} -{" "}
                    <span className="pl-[3px]">{i.endYear}</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <button className=" w-full flex items-center justify-center mt-3 py-3 bg-[#FAFAFA] text-[#18181B] text-sm font-semibold rounded-md">
            Download CV{" "}
            <span className="ml-3">
              <svg
                fill="none"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
              >
                <path
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                ></path>
              </svg>
            </span>
          </button>

          <p className="text-sm leading-[0px]  text-[#FFFFFF]">
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArticleAndExperience;