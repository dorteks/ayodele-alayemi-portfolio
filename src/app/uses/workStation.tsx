import React from "react";

const WorkStation = () => {
  return (
    <div className="w-full lg:w-4/5 xl:w-4/5 flex flex-col py-5 sm:py-6 lg:py-6 xl:py-0 gap-7 sm:gap-8 ">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-11 p-1 sm:px-3 md:px-6 lg:px-6 xl:p-6">
        <p className="w-auto md:border-l-[1px] md:border-zinc-400 text-sm font-bold leading-6 md:pl-[20px]  ">
          Workstation
        </p>

        <section className="flex flex-col gap-6">
          {[
            {
              id: 1,
              gadget: "Hp Elitebook Folio 1040 14inches, 8GB RAM 128GB SSD ",
              description:
                "This is a UK used system I got from my brother when he got himself a Macbook. I look forward to getting myself a high perfomance laptop with a fast processor, ample RAM, and sufficient storage to handle resource-intensive development tasks.",
            },
            {
              id: 2,
              gadget: "Desk and Chair",
              description:
                "Desk and Chair?, I use anything that has a flat surface: the dining table, the living room's center table, my bed etc. are places where I work at the moment. I find the dining table more comfortable to work with. There is enough space to accommodate my laptop/notebooks, the chair is comfortable and the table is high enought to set my PC at eye level. I plan to get myself a more comfortable work station when I land my first job as a frontend developer.",
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

export default WorkStation;
