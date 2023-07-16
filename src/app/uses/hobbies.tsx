import React from "react";

const Hobbies = () => {
  return (
    <div className="w-full lg:w-4/5 xl:w-4/5 flex flex-col py-5 sm:py-6 lg:py-6 xl:py-0 gap-7 sm:gap-8 ">
      <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-3 md:gap-16 p-1 sm:px-3 md:px-6 lg:px-6 xl:p-6">
        <p className="w-auto md:border-l-[1px] md:border-zinc-400 text-sm font-bold leading-6 md:pl-[20px]  ">
          Hobbies and Fun
        </p>

        <section className="flex flex-col gap-6">
          {[
            {
              id: 1,
              gadget: "Games",
              description:
                "The games I play for fun includes Chess, Sudoku ,Minesweeper, Word puzzles, Soccer, Table tennis etc.",
            },
            {
              id: 2,
              gadget: "Music",
              description:
                "I am a fan of contemporary classical gospel music. This genre of musics blends elements of classical music with gospel themes, creating a unique and uplifting musical experience. The fusion of classical and gospel elements in contemporary classical gospel results in a distinct genre that celebrates faith, spirituality, and musical artistry.",
            },
            {
              id: 3,
              gadget: "Musical Instruments",
              description:
                "Since I am a fan of music, I love to play musical instruments; most especially the string instruments. I learnt how to play the viola and violin, and I have the basic understanding on how to play the piano. I play musical instrments as an hobby and so, I would not consider myself a professional. However, I have played quite a number of violin concertos and orchestra pieces.",
            },
          ].map((i) => (
            <div key={i.id} className="flex flex-col gap-[16px]">
              <p className="text-zinc-800 font-semibold text-base">
                {i.gadget}
              </p>
              <p className="text-zinc-600 text-sm leading-6 ">
                {i.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Hobbies;
