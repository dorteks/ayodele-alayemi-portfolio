import React from "react";
import Introduction from "@/components/homepage/introduction";
import DisplayPictures from "@/components/homepage/displayPictures";
import ArticleAndExperience from "@/components/homepage/articleAndExperience";

const HomePage = () => {
  return (
    <div className="px-3 sm:px-0">
      <Introduction />
      <DisplayPictures />
      <ArticleAndExperience />
    </div>
  );
};

export default HomePage;
