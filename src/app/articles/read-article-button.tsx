import React from "react";
import { useRouter } from "next/navigation";

const ReadArticle = (props: { id: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/articles/${props.id}`)}
      className="cursor-pointer flex gap-2 items-center justify-start text-teal-500 font-medium text-sm leading-6"
    >
      Read article
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
    </button>
  );
};

export default ReadArticle;
