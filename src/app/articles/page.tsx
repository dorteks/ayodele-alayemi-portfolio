import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - Ayodele Alayemi",
  description: "My Articles",
};

const Article = () => {
  return (
    <div className="px-2 sm:px-0 tap-transparent">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#27272A] font-semibold max-w-[670px]  ">
        Writing on software development, rudiments of music and renewable
        energy.
      </h1>

      <p className="mt-6 mb-9 text-base text-zinc-600 max-w-[670px] ">
        All of my long-form thoughts on programming, product design, music and
        more, collected in chronological order.
      </p>

      <div className="w-full lg:w-4/5 xl:w-4/5 flex flex-col py-5 sm:py-6 lg:py-6 xl:py-0 gap-7 sm:gap-8 ">
        {[
          {
            id: 1,
            date: "July 12, 2023",
            title: "HTML & CSS: The ABC of Front-End Development",
            introduction:
              "HTML and CSS are considered the ABC of front-end development. They are fundamental technologies used to create and style web pages. HTML (Hypertext Markup Language) provides the structure and content of a web page, while CSS (Cascading Style Sheets) is used for styling and layout",
          },
          {
            id: 2,
            date: "July 12, 2023",
            title: "HTML & CSS: The ABC of Front-End Development",
            introduction:
              "HTML and CSS are considered the ABC of front-end development. They are fundamental technologies used to create and style web pages. HTML (Hypertext Markup Language) provides the structure and content of a web page, while CSS (Cascading Style Sheets) is used for styling and layout",
          },
          {
            id: 3,
            date: "July 12, 2023",
            title: "HTML & CSS: The ABC of Front-End Development",
            introduction:
              "HTML and CSS are considered the ABC of front-end development. They are fundamental technologies used to create and style web pages. HTML (Hypertext Markup Language) provides the structure and content of a web page, while CSS (Cascading Style Sheets) is used for styling and layout",
          },
        ].map((i) => (
          <div
            key={i.id}
            className="flex flex-col sm:flex-row items-start gap-6 sm:gap-16 p-1 sm:px-3 md:px-6 lg:px-6 xl:p-6"
          >
            <p className="mt-6 w-auto sm:w-[500px] border-l-[1px] border-zinc-400 text-zinc-400 text-sm leading-6 pl-[20px]  ">
              {i.date}
            </p>

            <Link
              href={`/articles/${i.title}`}
              className="flex flex-col py-6 px-6 gap-[16px] hover:bg-zinc-50 hover:rounded-3xl"
            >
              <p className="text-zinc-800 font-semibold text-base    ">
                {i.title}
              </p>
              <p className="text-zinc-600 text-sm leading-6 ">
                {i.introduction}
              </p>
              <p className="flex gap-2 items-center justify-start text-teal-500 font-medium text-sm leading-6">
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
    </div>
  );
};

export default Article;
