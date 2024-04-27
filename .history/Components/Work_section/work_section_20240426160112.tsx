"use client";

import { SectionTitle } from "@/Core/Widgets/widgets";
import { db } from "../../core/db/db";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      <nav>
        <ul className="flex justify-center mt-9 gap-2 flex-wrap">
          {navItems.map((item, index) => {
            const isSelected: Boolean = selectedNavItemIndex == index;
            return (
              <li
                className={`${
                  isSelected ? "bg-brand-color" : ""
                } px-3 py-1 rounded-md cursor-pointer`}
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

        {navItems[selectedNavItemIndex] == "mockups" && <div>dfgdfgdg</div>}
      </main>
    </section>
  );
}

// responsible to redirect to the appropriate page based on the selectedNavItemName
function Redirection(props) {
  const { selectedNavItemName, projectId } = props;

  let href: string = "/project/" + projectId;
  switch (selectedNavItemName) {
    case "ux":
      return (
        <Link
          href={`/project/ux/${projectId}`}
          className="cursor-pointer shadow-sm rounded-lg overflow-hidden mb-3 border border-gray-100 hover:bg-gray-100 hover:border-gray-300
    transition transform duration-300 ease-in-out group"
        >
          {props.children}
        </Link>
      );

    case "mockups":
      return props.children;

    default:
      return (
        <Link
          href={`/project/${projectId}`}
          className="cursor-pointer shadow-sm rounded-lg overflow-hidden mb-3 border border-gray-100 hover:bg-gray-100 hover:border-gray-300
    transition transform duration-300 ease-in-out group"
        >
          {props.children}
        </Link>
      );
  }
}
