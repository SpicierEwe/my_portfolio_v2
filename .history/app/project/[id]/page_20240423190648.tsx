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
      <div className="mt-16 px-5 mx-auto max-w-4xl">
        <Image
          className="mx-auto shadow-md border border-gray-300  rounded-md"
          src={imageLink}
          width={2000}
          height={2000}
          alt={`${projectName} image`}
        ></Image>
      </div>

      <div className="mt-14 mx-4">
        <h3 className="text-center text-2xl">Summary</h3>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          voluptatum, quod, quae, dolorum laboriosam voluptatem nesciunt
          molestias fugiat quibusdam quia officia. Quisquam, quia. Quisquam
          officiis, quia, quod, quibusdam voluptatem dolorum quas voluptas
          voluptates cumque doloremque ad. Quisquam, quia. Quisquam officiis,
          quia, quod, quibusdam voluptatem dolorum quas voluptas voluptates
          cumque doloremque ad.
        </p>
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
