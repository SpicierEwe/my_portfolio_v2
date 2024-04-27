import React from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  const data = db.portfolioItems.mockups;
  return (
    <div>

   {  data.map((item: any, index: number){
    return  <Image
    src={item.link}
    alt="mockup"
    width={1000}
    height={1000}
  ></Image>
   })}
    </div>
  );
}
