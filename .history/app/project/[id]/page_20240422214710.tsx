"use client";
import { db } from "@/core/db/db";
import Image from "next/image";

export default function Project({ params }) {
  const { id } = params;
  const { projectName, imageLink } = getProjectData(id)[0];

  return (
    <section className="pt-12">
      {/* project name */}
      <h1 className="text-3xl text-center">{projectName}</h1>
      {/* project image */}
      <div className="mt-24">
        <Image
          className="px-5 w-screen border border-gray-700 rounded-lg"
          src={imageLink}
          width={200}
          height={200}
          alt={`${projectName} image`}
        ></Image>
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
