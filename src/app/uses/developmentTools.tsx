import React from "react";

const DevelopmentTools = () => {
  return (
    <div className="w-full lg:w-4/5 xl:w-4/5 flex flex-col py-5 sm:py-6 lg:py-6 xl:py-0 gap-7 sm:gap-8 ">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-9 p-1 sm:px-3 md:px-6 lg:px-6 xl:p-6">
        <p className="w-auto md:border-l-[1px] md:border-zinc-400 text-sm font-bold leading-6 md:pl-[20px]  ">
          Development tools
        </p>

        <section className="flex flex-col gap-6">
          {[
            {
              id: 1,
              gadget: "Visual Studio Code (VSC)",
              description:
                "Visual Studio Code or VSC is a popular source code editor developed by Microsoft. It is widely used by developers for writing, editing, and debugging code across various programming languages and frameworks.",
            },
            {
              id: 2,
              gadget: "Version Control Systems (Git)",
              description:
                "Git is a distributed version control system widely used by developers to track changes in their codebase, collaborate with others, and manage software development projects.",
            },
            {
              id: 3,
              gadget: "Package Managers",
              description:
                "npm (Node Package Manager) and yarn are the package managers I use in JavaScript development to manage dependencies and packages within a project.",
            },
            {
              id: 4,
              gadget: "Testing and Debugging",
              description:
                "Jest and Postman are popular tools used for testing and debugging JavaScript applications. I use Jest for unit testing JavaScript code for React and Node.js applications while I use postman for testing and debugging APIs.",
            },
            {
              id: 5,
              gadget: "HTML, CSS, Javascript and Typescript",
              description:
                "These forms the core components of modern web development and are the foundation tools that I use for my designs. I use these languages in combination with other frameworks, libraries, and tools to build complex and responsive websites and web applications. I use Javascript and Typescript for creating interactive features, form validation, event handling, manipulation of elements and fetching data from APIs.",
            },
            {
              id: 6,
              gadget: "ReactJs & NextJs",
              description:
                "React is a JavaScript library for building user interfaces, while Next.js is a framework that extends React by providing server-side rendering and other powerful features. Together, they provide a powerful toolkit for building fast, scalable, and interactive web applications.",
            },
            {
              id: 7,
              gadget: "CSS Modules and Libraries",
              description:
                "These libraries/framewors are pre-written CSS files that provides ready-to-use styles, components, and utilities. They include predefined styles for typography, layout grids, buttons, forms, and other common UI elements. CSS libraries helps to speed up development by reducing the need to write custom CSS from scratch. CSS libraries I use include Tailwind CSS, ChakraUI, and MaterialUI.",
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

export default DevelopmentTools;
