"use client";

import { SectionTitle } from "../../core/widgets/widgets";
import { db } from "../../core/db/db";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MockupsSection from "./mockups_section";

export default function WorkSection() {
  const navItems: string[] = Object.keys(db.portfolioItems);
  const [selectedNavItemIndex, setSelectedNavItemIndex] = useState<number>(0);
  return (
    <section id="work">
      {/* header */}
      <SectionTitle
        title="Discover my Projects"
        subtitle=" Journey through my projects, Unveiling Innovation and Creativity."
      />
      {/* nav */}
      <nav className="sticky top-5 z-[99999] mt-12 md:mt-14 p-1   w-max mx-auto rounded-full bg-white shadow-sm border ">
        <ul className="flex justify-center  gap-2 flex-wrap">
          {navItems.map((item, index) => {
            const isSelected: Boolean = selectedNavItemIndex == index;
            return (
              <li
                className={`${
                  isSelected ? "bg-brand-color" : ""
                } px-5 md:px-7 py-2 rounded-full cursor-pointer`}
                onClick={() => setSelectedNavItemIndex(index)}
                key={index}
              >
                <div
                  className={`${
                    isSelected ? "text-white" : "text-gray-500"
                  } capitalize`}
                >
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <main>
        {/* projects */}

        {/* if mockups show the custom mockup component */}
        {navItems[selectedNavItemIndex] == "mockups" && <MockupsSection />}

        {/* if not mockups show the this */}

        {navItems[selectedNavItemIndex] != "mockups" && (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14 px-3 md:px-5 py-3  max-w-screen-xl mx-auto`}
          >
            {(db.portfolioItems as any)[navItems[selectedNavItemIndex]].map(
              (item: any, index: number) => {
                const selectedNavItemName: string =
                  navItems[selectedNavItemIndex];
                const projectName: string = item["projectName"];
                const imageLink: string = item["imageLink"];
                const tagLine = item["projectTagLine"];
                const projectId = item["projectId"];

                const isNavApps: Boolean = selectedNavItemName === "apps";
                const isNavUx: Boolean = selectedNavItemName === "ux";
                return (
                  <Redirection
                    key={index}
                    selectedNavItemName={selectedNavItemName.toLowerCase()}
                    projectId={projectId}
                  >
                    <div
                      className={`${isNavUx ? "h-56 w-full object-cover" : ""}`}
                    >
                      <Image
                        className={`
                     ${isNavApps ? "aspect-square object-contain" : ""}
                     ${isNavUx ? "w-full h-full" : ""}
                    group-hover:scale-105 transition-all duration-500 ease-in-out`}
                        src={imageLink}
                        alt={projectName}
                        height={200}
                        width={200}
                        priority
                        layout={!isNavUx ? "responsive" : ""}
                      />
                    </div>
                    <div className="ml-3 mb-6 mt-5">
                      <p className="border border-secondary-color w-fit px-2 py-0.5 rounded text-secondary-color text-sm">
                        {selectedNavItemName}
                      </p>
                      <p className="font-bold mt-4">{projectName}</p>
                      <p className="text-gray-500 text-sm line-clamp-1">
                        {tagLine}
                      </p>
                    </div>
                  </Redirection>
                );
              }
            )}
          </div>
        )}
      </main>
    </section>
  );
}

// responsible to redirect to the appropriate page based on the selectedNavItemName
function Redirection(props) {
  const { selectedNavItemName, projectId } = props;

  let href: string = "/project/" + projectId;

  const classNames: string =
    "cursor-pointer shadow-sm rounded-lg overflow-hidden mb-3 border border-gray-100 hover:bg-gray-100 hover:border-gray-300 transition transform duration-300 ease-in-out group border border-gray-200 border-1";

  switch (selectedNavItemName) {
    case "ux":
      return (
        <Link href={`/project/ux/${projectId}`} className={classNames}>
          {props.children}
        </Link>
      );

    case "mockups":
      return props.children;

    default:
      return (
        <Link href={`/project/${projectId}`} className={classNames}>
          {props.children}
        </Link>
      );
  }
}
