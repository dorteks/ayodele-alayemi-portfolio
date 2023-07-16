import React from "react";

const Productivity = () => {
  return (
    <div className="w-full lg:w-4/5 xl:w-4/5 flex flex-col py-5 sm:py-6 lg:py-6 xl:py-0 gap-7 sm:gap-8 ">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 p-1 sm:px-3 md:px-6 lg:px-6 xl:p-6">
        <p className="w-auto  md:border-l-[1px] md:border-zinc-400 text-sm font-bold leading-6 md:pl-[20px]  ">
          Productivity{" "}
        </p>

        <section className="flex flex-col gap-6">
          {[
            {
              id: 1,
              gadget: "Collaboration and Project Management Tools",
              description:
                "Jira and Trello are tools I use for project management and issue tracking. They are designed to help teams plan, track, and manage their work effectively. Slack & Microsoft Teams are the major collaboration tools I everyday.",
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

export default Productivity;
