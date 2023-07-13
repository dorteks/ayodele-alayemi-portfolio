import React from "react";
import ArticleAndExperience from "./articleAndExperience";
import Introduction from "./introduction";
import DisplayPictures from "./displayPictures";

const LandingPage = () => {
  return (
    <>
      <Introduction />
      <DisplayPictures />
      <ArticleAndExperience />
    </>
  );
};

export default LandingPage;
