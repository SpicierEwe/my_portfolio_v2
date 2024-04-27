"use client";
import { db } from "@/core/db/db";
import Image from "next/image";

export default function Project({ params }) {
  const { id } = params;
  const { projectName, imageLink, projectTagLine, info } =
    getProjectData(id)[0];

  return (
    <section className="pt-12">
      {/* project name */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">{projectName}</h1>
        <p className="mt-3">{projectTagLine}</p>
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
          <p className="text-center text-2xl">Summary</p>
          <p className="mt-5 " dangerouslySetInnerHTML={{ __html: info }}></p>
        </div>
        <div className="mt-10">
          <h3 className="text-center text-2xl">Technologies</h3>
          <ul className="mt-5">
            <li>React</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function getProjectData(id: string) {
  return Object.keys(db.portfolioItems).map((key) => {
    return (db.portfolioItems as any)[key].find(
      (item: any) => item.projectId === id
    );
  });
}
