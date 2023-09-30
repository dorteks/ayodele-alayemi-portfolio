import React from "react";
import Link from "next/link";
import Image from "next/image";

const Desktop = () => {
  return (
    <main className="hidden lg:flex tap-transparent">
      <div className="w-1/2 flex flex-col gap-6 ">
        <h1 className="text-[40px] leading-[48px] font-semibold text-[#27272A]   ">
          I’m Ayodele Alayemi, a highly skilled and motivated frontend
          developer. I design and implement user interfaces for web
          applications.
        </h1>
        <div className="flex flex-col gap-6 text-base text-[#52525B] ">
          <p>
            I possess the necessary technical skills and experience to create
            visually appealing and interactive user interfaces. I have a solid
            understanding of HTML, CSS, JavaScript, and Typescript as well as
            experience with modern frontend libraries and frameworks such as
            React and NextJs. I am proficient in designing responsive and
            accessible web applications that deliver a seamless user experience
            across different devices and browsers.
          </p>
          <p>
            I am also highly creative and detail-oriented. I have a keen eye for
            aesthetics and a deep understanding of UX principles, allowing me to
            create visually appealing designs that are intuitive and easy to
            use. I have strong understanding of modern web development
            principles, including mobile-first design, cross-browser
            compatibility, and accessibility.
          </p>
          <p>
            I am constantly eager to learn and stay up-to-date with the latest
            industry trends and best practices. I actively seek out
            opportunities to improve my skills and expand my knowledge in
            frontend development. I am also able to work independently and
            manage my time effectively to meet project deadlines.
          </p>
          <p>
            I am a strong communicator and a team player. I am able to
            collaborate effectively with designers, product managers, and
            backend developers to bring concepts to life and deliver
            high-quality frontend solutions. I believe in open and transparent
            communication, and I am always willing to collaborate and contribute
            to the success of the team. I am confident that my skills,
            experience, and dedication to continuous learning make me a valuable
            asset to any frontend development team. I actively contribute my
            expertise to create outstanding user experiences for any company’s
            products or services.
          </p>
        </div>
      </div>
      <div className="w-1/2 pl-[64px] xl:pl-[96px] ">
        <div>
          <Image
            width={350}
            height={350}
            alt="profile"
            src="/assets/profile.jpeg"
            className="bg-green-500 rotate-2 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-6 my-14">
          {[
            {
              id: 1,
              link: "https://linkedin.com/in/ayodele-alayemi",
              iconSrc: "/assets/linkedin-blackfill.png",
              follow: "Follow on Linkedin",
            },
            {
              id: 2,
              link: "https://instagram.com/",
              iconSrc: "/assets/instagram-blackfill.svg",
              follow: "Follow on Instagram",
            },
            {
              id: 3,
              link: "https://github.com/dorteks",
              iconSrc: "/assets/github-blackfill.png",
              follow: "Follow on Github",
            },
            {
              id: 4,
              link: "https://twitter.com/dotex245",
              iconSrc: "/assets/twitter-blackfill.svg",
              follow: "Follow on Twitter",
            },
          ].map((i) => {
            return (
              <div key={i.id}>
                <Link
                  href={i.link}
                  className="flex flex-row gap-4 text-sm text-[#27272A] hover:text-[#14B8A6] font-semibold"
                >
                  <Image
                    width={8}
                    height={8}
                    alt="socials"
                    src={i.iconSrc}
                    className="w-[20px] h-[20px] "
                  />

                  <p>{i.follow}</p>
                </Link>
              </div>
            );
          })}
        </div>

        <Link
          href=""
          // className="flex flex-row gap-4 pt-8 text-sm text-[#27272A] hover:text-[#14B8A6] font-semibold border-t-[1px] border-[#ebe5e7]"
          className="flex flex-row gap-4 pt-8 text-sm text-[#27272A] font-semibold border-t-[1px] border-[#ebe5e7]"
        >
          <svg
            fill="none"
            strokeWidth="1.5"
            aria-hidden="true"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 flex-none"
          >
            <path
              d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            ></path>
            <path
              d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
              className="stroke-zinc-400 dark:stroke-zinc-500"
            ></path>
          </svg>

          <p>ayodelealayemi@gmail.com</p>
        </Link>

        <div className="flex flex-row items-center gap-4 pt-6 text-sm text-[#27272A] font-semibold   ">
          <Image
            src="/assets/whatsapp.png"
            alt="whatsapp"
            height={24}
            width={24}
          />
          <p>+234 810 252 3205</p>
        </div>

        <button className="w-[250px] mt-6 flex self-center items-center justify-center py-3 bg-[#FAFAFA] hover:bg-[#ece7e7] text-[#18181B] text-sm font-semibold rounded-md   ">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1LfWOJiZOJ5Ay9hghavKHkotg0_et17wW/view"
          >
            Link to CV
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Desktop;
