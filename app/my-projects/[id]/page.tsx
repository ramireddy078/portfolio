"use client";

import projectData from "@/data/projectsExplore";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams(); // Extract route parameter
  const router = useRouter();

  // Find the project based on the id parameter
  const project = projectData.find(
    (eachProject) => eachProject.id === Number(id)
  );

  if (!project) {
    return <div>Project Not Found.....</div>;
  }

  return (
    <div className="min-h-fit bg-gray-100 p-8 py-[15vh]">
      <h1 className="text-4xl font-bold text-[#34aadc]">{project.name}</h1>
      <p className="mt-4 text-lg text-gray-700">
        <strong>Moto:</strong> {project.moto}
      </p>
      <p className="mt-4 text-lg text-gray-700">
        <strong>Technologies Used:</strong>{" "}
        {project.usedTechnologies.join(", ")}
      </p>
      <p className="mt-4 text-lg text-gray-700">
        <strong>Challenges Faced:</strong>
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        {project.facedIssuesWhileBuilding.map((issue, idx) => (
          <li key={idx}>{issue}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-5 md:flex-row">

      <button
        onClick={() => router.push("/")}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white rounded capitalize"
      >
        Back to Home
      </button>
      <button
        onClick={() => router.back()}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white rounded capitalize"
      >
        Back to previous page
      </button>
      </div>
    </div>
  );
};

export default Page;
