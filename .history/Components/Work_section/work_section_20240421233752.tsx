"use client";

import Link from "next/link";
import { useState } from "react";

export default function WorkSection() {
  const navItems: string[] = ["All", "Web", "Mobile", "UI/UX", "Designs"];
  const [selectedNavItemIndex, setSelectedNavItemIndex] = useState<number>(0);
  return (
    <section className="">
      {/* header */}
      <header className="flex flex-col items-center pt-5">
        <h2 className="text-center text-2xl">Discover my Projects</h2>
        <p className="text-center text-sm mt-2 text-gray-500">
          Journey through my projects, Unveiling Innovation and Creativity.
        </p>
      </header>
      <nav>
        <ul className="flex justify-center mt-5 gap-x-3">
          {navItems.map((item, index) => (
        
          ))}
        </ul>
      </nav>
    </section>
  );
}
