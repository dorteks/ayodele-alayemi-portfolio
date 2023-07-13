import React from "react";
import Mobile from "./mobile";
import { Metadata } from "next";
import Desktop from "./desktop";

export const metadata: Metadata = {
  title: "About - Ayodele Alayemi",
  description: "About me",
};

const About = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default About;
