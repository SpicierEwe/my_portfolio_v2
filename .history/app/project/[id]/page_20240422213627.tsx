"use client";
import { db } from "@/core/db/db";
import Image from "next/image";

export default function Project({ params }) {
  const { id } = params;
  const { projectName, imageLink } = getProjectData(id)[0];

  return (
    <section>
      <h1>{projectName}</h1>
      <div>
        <Image src={imageLink}></Image>
      </div>
    </section>
  );
}

function getProjectData(id: string) {
  return Object.keys(db.portfolioItems).map((key) => {
    return (db.portfolioItems as any)[key].find(
      (item) => item.projectId === id
    );
  });
}
