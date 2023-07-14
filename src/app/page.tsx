import React from "react";
import Introduction from "@/components/homepage/introduction";
import DisplayPictures from "@/components/homepage/displayPictures";
import ArticleAndExperience from "@/components/homepage/articleAndExperience";

const HomePage = () => {
  return (
    <>
      <Introduction />
      <DisplayPictures />
      <ArticleAndExperience />
    </>
  );
};

export default HomePage;
