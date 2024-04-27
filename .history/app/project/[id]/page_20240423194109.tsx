"use client";
import { db } from "@/core/db/db";
import { getIcon } from "@/core/utils/utils";
import Image from "next/image";

export default function Project({ params }) {
  const { id } = params;
  const { projectName, imageLink, projectTagLine, info, techStack } =
    getProjectData(id)[0];

  return (
    <section className="pt-12">
      {/* project name */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl uppercase">{projectName}</h1>
        <p className="mt-1 text-gray-600">{projectTagLine}</p>
      </div>

      {/* project image */}
      <div className="mt-16 px-5 mx-auto max-w-4xl">
        <Image
          className="mx-auto shadow-md border border-gray-300  rounded-md"
          src={imageLink}
          width={2000}
          height={2000}
          alt={`${projectName} image`}
        ></Image>
      </div>

      <div className="mt-16 mx-6 flex flex-col">
        <div>
          <h4 className="text-md font-bold text-gray-600">Summary</h4>
          <p className="mt-5" dangerouslySetInnerHTML={{ __html: info }}></p>
        </div>
        <div className="mt-10">
          <h3 className="text-md font-bold text-gray-600">Techstack</h3>
          <div className="mt-7 flex flex-col gap-y-5">
            {techStack.map((tech: string, index: number) => (
              <div key={index} className="flex gap-5 ml-5">
                {getIcon(tech, "w-7 h-7")}
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DisplayElements(props) {
  const { info, techStack } = props;
  return (
    <div className="mt-10">
      <h3 className="text-md font-bold text-gray-600">Techstack</h3>
      <div className="mt-7 flex flex-col gap-y-5">
        {techStack.map((tech: string, index: number) => (
          <div key={index} className="flex gap-5 ml-5">
            {getIcon(tech, "w-7 h-7")}
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

function getProjectData(id: string) {
  return Object.keys(db.portfolioItems).map((key) => {
    return (db.portfolioItems as any)[key].find(
      (item: any) => item.projectId === id
    );
  });
}
