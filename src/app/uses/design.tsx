import React from "react";

const Design = () => {
  return (
    <div className="w-full lg:w-4/5 xl:w-4/5 flex flex-col py-5 sm:py-6 lg:py-6 xl:py-0 gap-7 sm:gap-8 ">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20 p-1 sm:px-3 md:px-6 lg:px-6 xl:p-6">
        <p className="w-auto md:border-l-[1px] md:border-zinc-400 text-sm font-bold leading-6 md:pl-[20px]">
          Design
        </p>

        <section className="flex flex-col gap-6">
          {[
            {
              id: 1,
              gadget: "Figma",
              description:
                "Figma is a web-based design and prototyping tool used by designers and teams to create user interfaces (UI) and collaborate on design projects. Figma provides features for developers to inspect design elements and export assets. Developers can access specifications like CSS properties, measurements, and colors directly from the design.",
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

export default Design;
