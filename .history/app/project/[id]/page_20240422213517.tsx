"use client";
import { db } from "@/core/db/db";
import { usePathname, useSearchParams } from "next/navigation";

export default function Project({ params }) {
  const { id } = params;
  const { projectName } = getProjectData(id)[0];

  return <section>{projectName}</section>;
}

function getProjectData(id: string) {
  return Object.keys(db.portfolioItems).map((key) => {
    return (db.portfolioItems as any)[key].find(
      (item) => item.projectId === id
    );
  });
}
