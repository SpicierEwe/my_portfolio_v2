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
      <div className="mt-24 w-screen bg-red-900 object-cover mx-5 overflow-hidden">
        <Image
          className="px-9 w-max max-w-4xl object-contain rounded-lg"
          src={imageLink}
          width={2000}
          height={2000}
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
