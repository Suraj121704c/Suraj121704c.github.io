import React from "react";
import MiniProjectList from "./MiniProjectList";
import CustomCarousel from "../../Helper/CustomCarousel";
import { mini_project_list } from "./Projects";

export default function MiniProject() {
  return (
    <div>
      <MiniProjectList />
      <CustomCarousel carouselData={mini_project_list} />
    </div>
  );
}
