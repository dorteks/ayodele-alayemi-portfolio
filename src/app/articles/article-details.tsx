import React from "react";
import Image from "next/image";

type ArticleDetailsProps = {
  date: string;
  title: string;
  descripton: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  paragraph6?: string;
  paragraph7?: string;
  paragraph8?: string;
  paragraph9?: string;
  paragraph10?: string;
  imageSrc1: string;
};

const ArticleDetails = (props: ArticleDetailsProps) => {
  return (
    <div className="flex flex-col items-start w-auto md:w-11/12 lg:w-auto">
      <p className="w-auto sm:w-[500px] border-l-[1px] border-zinc-400 text-zinc-400 text-sm leading-6 pl-[12px]">
        {props.date}
      </p>

      <div className="w-auto lg:w-[700px] xl:w-4/5  flex flex-col py-6">
        <p className="text-zinc-800 font-semibold text-2xl leading-[32px] sm:text-4xl sm:leading-[48px] lg:text-5xl lg:leading-[62px] mt-6">
          {props.title}
        </p>
        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.descripton}
        </p>
        <Image
          src={props.imageSrc1}
          alt=""
          width={300}
          height={300}
          className="w-auto max-w-[680px] sm:min-h-[320px] max-h-[530px] mt-7 rounded-3xl bg-zinc-400 border-zinc-200 border-[2px]  "
        />
        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph1}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph2}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph3}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph4}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph5}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph6}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph7}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph8}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph9}
        </p>

        <p className="text-zinc-600 text-sm sm:text-base leading-6 mt-7">
          {props.paragraph10}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
