"use client";

import React from "react";
import Articles from "./articles";

const fetchArticles = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return data;
};

const Article = async () => {
  const comments = await fetchArticles();

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
        {comments.length > 0 &&
          comments.map((comment: any) => (
            <Articles
              id={comment.id}
              key={comment.id}
              name={comment.name}
              email={comment.email}
            />
          ))}
      </div>
    </div>
  );
};

export default Article;
