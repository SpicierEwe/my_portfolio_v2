"use client";
import { db } from "@/core/db/db";
import { usePathname, useSearchParams } from "next/navigation";

export default function Project({ params }) {
  const { id } = params;
  const projectData = getProjectData(id);
  return <p>Post: {projectData[0]["projectName"]}</p>;
}

function getProjectData(id: string) {
  return Object.keys(db.portfolioItems).map((key) => {
    return (db.portfolioItems as any)[key].find(
      (item) => item.projectId === id
    );
  });
}
