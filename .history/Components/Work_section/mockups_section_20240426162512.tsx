import React from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection(props) {
  const data = db.portfolioItems.mockups;
  return (
    <div>
      <Image src={imageLink} alt="mockup" width={1000} height={1000}></Image>
    </div>
  );
}
