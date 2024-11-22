import { projects } from "@/data/projects";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Project } from "@/types/project";

const Projects: React.FC = () => {
  return (
    <section className="space-y-10 bg-gray-100">
      <div>
        <h1 className="text-5xl text-center text-[#34aadc]">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-10 w-[80%] sm:w-full sm:px-2 md:w-[90%] md:mx-auto sm:grid-cols-2 lg:w-full xl:w-[90%] lg:grid-cols-3 mx-auto py-10">
        {projects.map((eachproject: Project) => (
          <ProjectsCard key={eachproject.id} project={eachproject} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
