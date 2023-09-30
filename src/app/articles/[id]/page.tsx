import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Articles -  `,
  description: "My Articles",
};

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return data.map((comment: any) => ({
    id: comment.id.toString(),
  }));
}

const fetchSingleComment = async (props: { id: string }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${props.id}`
  );
  const data = await res.json();
  return data;
};

const ArticleSlug = async ({ params }: { params: { id: string } }) => {
  const comment = await fetchSingleComment(params);

  return (
    <div className="flex flex-col items-start lg:flex-row gap-6 lg:gap-16 xl:gap-24 tap-transparent px-[8px] sm:px-0">
      <Link href={`/articles`}>
        <div className="relative -top-1 border-[1px] border-zinc-500 rounded-full w-[35px] h-[35px] flex items-center justify-center ">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </Link>

      <div className="flex flex-col items-start w-auto md:w-11/12 lg:w-auto  ">
        <p className="w-auto sm:w-[500px] border-l-[1px] border-zinc-400 text-zinc-400 text-sm leading-6 pl-[12px] ">
          {comment.email}
        </p>

        <div className="w-auto lg:w-[700px] xl:w-4/5  flex flex-col py-6">
          <p className="text-zinc-800 font-semibold text-2xl leading-[32px] sm:text-4xl sm:leading-[48px] lg:text-5xl lg:leading-[62px] mt-6">
            {comment.name}
          </p>
          <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
            {comment.body}
          </p>
          {/* <Image
            src="/assets/html-css-beginners.jpg"
            alt=""
            width={300}
            height={300}
            className="w-auto max-w-[680px] sm:min-h-[320px] max-h-[530px] mt-7 rounded-3xl bg-zinc-400 border-zinc-200 border-[2px]  "
          />
          <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
            Paragraph 1. HTML defines the elements and structure of a webpage.
            Elements are represented by tags and (which are enclosed in angle
            brackets) and they define the different parts of a webpage. Elements
            can be headings, paragraphs, links, images, forms, tables, and so
            on. For example, the <h1></h1> tag represents a heading, the <p></p>{" "}
            tag represents a paragraph, the <image /> tag represents an image,
            and the <a></a> tag represents a link. By combining and nesting
            these tags, you can create a structured document.
          </p> */}
          <Image
            src="/assets/html.png"
            alt=""
            width={300}
            height={300}
            className="w-auto max-w-[680px] sm:min-h-[320px] max-h-[530px] mt-7 rounded-3xl bg-zinc-400 border-zinc-200 border-[2px]  "
          />

          {/* <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
            Paragraph 2. CSS, on the other hand, is used to define the
            presentation and visual layout of HTML elements. It allows you to
            specify the color, size, font, spacing, positioning and other
            stylings to be applied to elements on a web page. With CSS, you can
            create visually appealing designs, apply styles consistently across
            multiple pages, and even make websites responsive to different
            screen sizes. CSS works by selecting HTML elements using selectors
            and applying styles to them.
          </p>
          <Image
            src="/assets/css.jpeg"
            alt=""
            width={300}
            height={300}
            className="w-auto max-w-[680px] sm:min-h-[320px] max-h-[530px] mt-7 rounded-3xl bg-zinc-400 border-zinc-200 border-[2px]  "
          /> */}
          <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
            {comment.body}
            {/* Paragraph 3. Front-end developers combines HTML and CSS to build
            user interfaces (web pages) and ensure a pleasant user experience.
            HTML provides the semantic structure and content, while CSS controls
            the visual appearance and layout of that content. Together, they
            form the foundation of front-end development and are essential for
            creating responsive and user-friendly websites. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleSlug;
