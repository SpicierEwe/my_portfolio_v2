"use client";

import { db } from "../../core/db/db";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WorkSection() {
  const navItems: string[] = Object.keys(db.portfolioItems);
  const [selectedNavItemIndex, setSelectedNavItemIndex] = useState<number>(0);
  return (
    <section className="">
      {/* header */}
      <header className="flex flex-col items-center pt-5">
        <h2 className="text-center text-2xl">Discover my Projects</h2>
        <p className="text-center text-sm mt-2.5 text-gray-500">
          Journey through my projects, Unveiling Innovation and Creativity.
        </p>
      </header>
      {/* nav */}
      <nav>
        <ul className="flex justify-center mt-6 gap-2 flex-wrap">
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
                <Link
                  href="#"
                  className={`${
                    isSelected ? "text-white" : "text-gray-500"
                  } capitalize`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <main>
        {/* projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 px-3 py-3">
          {(db.portfolioItems as any)[navItems[selectedNavItemIndex]].map(
            (item: any, index: number) => {
              const selectedNavItemName: string =
                navItems[selectedNavItemIndex];
              const projectName: string = item["projectName"];
              const imageLink: string = item["imageLink"];
              const tagLine = item["projectTagLine"];
              return (
                <div
                  key={index}
                  className="shadow-sm rounded-lg overflow-hidden mb-3 border border-gray-100"
                >
                  {
                    <Image
                      className="hover:scale-105 transition-transform duration-300 ease-in-out"
                      src={imageLink}
                      alt={projectName}
                      height={200}
                      width={200}
                      layout="responsive"
                    ></Image>
                  }
                  <div className="ml-3 mb-6 mt-5">
                    <p className=" font-bold">
                      {projectName} {selectedNavItemName}
                    </p>
                    <p className="text-gray-500 text-sm">{tagLine}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </main>
    </section>
  );
}
