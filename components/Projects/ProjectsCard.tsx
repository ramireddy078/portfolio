// components/ProjectsCard.tsx
import React from "react";
import { Project } from "@/types/project";
import Link from "next/link";
import projectData from "@/data/projectsExplore";

interface ProjectsCardProps {
  project: Project;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4. h-full w-full bg-white">
      <img
        src={project.imageUrl}
        alt={project.name}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="p-4">
      <h2 className="text-xl font-bold mt-4">{project.name}</h2>
      <p className="text-gray-600 mt-2 line-clamp-2">{project.description}</p>
      {/* <button className="ml-auto">Explore More</button> */}
      <div className="flex items-center mt-4">
        <Link href={`my-projects/${project.id}`}>
          <button className="ml-auto bg-[#0a6c75] text-indigo-600. text-white px-2 rounded-sm text-lg hover:underline">
            Explore More
          </button>
        </Link>
        </div>
      <div className="mt-4">
        {/* <p className="font-semibold mb-2">Technologies:</p> */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-600 px-3 py-1 text-sm rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4 space-x-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Live Demo
        </a>
      </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
