import Link from "next/link";
import React from "react";
import ReadArticle from "./read-article-button";

type articleProps = {
  email: string;
  name: string;
  id: string;
};

const Articles = (props: articleProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-3 md:gap-10 lg:gap-16 p-1 sm:px-3 md:px-6 lg:px-6 xl:p-6">
      <p className="mt-6 min-w-[150px] border-l-[1px] border-zinc-400 text-zinc-400 text-sm leading-6 pl-[20px]">
        {/* {i.date} */}
        {props.email}
      </p>

      <div
        // href={`/articles/${props.name}`}
        //   as={`articles/${props.name.toLocaleLowerCase()}`}
        className="w-full flex flex-col py-6 px-6 gap-[16px] hover:bg-zinc-50 hover:rounded-3xl"
      >
        <p className="text-zinc-800 font-semibold text-base    ">
          {props.email}
        </p>
        <p className="text-zinc-600 text-sm leading-6 ">{props.name}</p>

        <ReadArticle id={props.id} />
      </div>
    </div>
  );
};

export default Articles;
