"use client"
import projectData from '@/data/projectsExplore';
import { useParams } from 'next/navigation'
import { stringify } from 'querystring';
import React from 'react'

const page = () => {
    const {id} = useParams();
    // console.log(id)

    const project = projectData.find((eachProject) => eachProject.id === Number(id));
    if(!project){
        return <div>Project Not Found.....</div>
    }
  return (
    <div className="min-h-fit bg-gray-100 p-8 py-[15vh]">
      <h1 className="text-4xl font-bold text-[#34aadc]">{project.name}</h1>
      <p className="mt-4 text-lg text-gray-700">
        <strong>Moto:</strong> {project.moto}
      </p>
      <p className="mt-4 text-lg text-gray-700">
        <strong>Technologies Used:</strong> {project.usedTechnologies.join(", ")}
      </p>
      <p className="mt-4 text-lg text-gray-700">
        <strong>Challenges Faced:</strong>
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        {project.facedIssuesWhileBuilding.map((issue, idx) => (
          <li key={idx}>{issue}</li>
        ))}
      </ul>
    </div>
  )
}

export default page
