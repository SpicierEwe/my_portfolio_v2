"use client";
import { db } from "@/core/db/db";
import { getIcon } from "@/core/utils/utils";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { MdWork } from "react-icons/md";

export default function Project({ params }) {
  const { id } = params;

  const {
    projectName,
    imageLink,
    projectTagLine,
    info,
    techStack,
    roles,
    link,
    platforms,
  } = getProjectData(id);

  return <CaseStudyC></CaseStudyC>;
}

function DisplayElements(props: any) {
  const { sectionName, dataList, mainDivClasses, childClasses } = props;

  return (
    <div className={`${mainDivClasses}`}>
      <div className="flex gap-x-5 items-center shadow w-min px-3 py-2 rounded">
        {getIcon(sectionName, "w-5 h-5")}
        <h3 className="text-md font-bold text-gray-600">{sectionName}</h3>
      </div>

      <div className={`${childClasses}`}>
        {dataList.map((tech: string, index: number) => (
          <div key={index} className="flex gap-5 items-center group">
            <div className="shadow-inner bg-gray-50 border rounded-full p-2 transition-all duration-200 ease-in-out group-hover:scale-125">
              <div className="transition-all duration-200 ease-in-out">
                {getIcon(tech, "w-5 h-5 md:w-6 md:h-6")}
              </div>
            </div>
            <p className="text-sm">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getProjectData(id: string) {
  // Iterate through the portfolioItems object
  for (const key of Object.keys(db.portfolioItems)) {
    // Find the item with the specified projectId in the current key's array
    const item = (db.portfolioItems as any)[key].find(
      (item: any) => item.projectId === id
    );

    // If the item is found, log it and return it directly
    if (item) {
      console.log(item);
      return item;
    }
  }

  // If no item is found, log 'not found' and return undefined
  console.log("not found");
  return undefined;
}

function projectNameFunc(name: string): JSX.Element {
  // Calculate the length of the string
  const length = name.length;
  const percentage = 70;

  // Extract the rest of the string (excluding the last 3 characters)
  const restOfString = name.slice(0, (length * percentage) / 100);

  // Extract the last 3 characters of the string
  const lastThirtyPercent = name.slice((length * percentage) / 100);

  return (
    <p>
      {restOfString}
      <span className="text-secondary-color">
        {lastThirtyPercent}
        <span className="animate-pulse">.</span>
      </span>
    </p>
  );
}
