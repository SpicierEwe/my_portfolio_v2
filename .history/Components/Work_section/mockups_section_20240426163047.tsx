import React from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  const data = db.portfolioItems.mockups;
  return (
    <div className="grid grid-cols-2">
      {data.map((item: any, index: number) => {
        return (
          <div key={index}>
            <p>{item}</p>
            <Image src={item} alt="mockup" width={1000} height={1000}></Image>
          </div>
        );
      })}
    </div>
  );
}
