import React from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  const data = db.portfolioItems.mockups;
  return (
    <div>
      <Image
        src={isTemplateExpression.link}
        alt="mockup"
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
}
