import { WORK_PROJECTS } from "@utils/constants.utils";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="flex flex-col h-full w-full px-6 md:px-20 space-y-20 md:space-y-32">
      {WORK_PROJECTS.map((project, idx) => {
        return (
          <ProjectCard key={project.id} project={project} index={idx} />
        );
      })}
    </div>
  );
}

export default Projects;
