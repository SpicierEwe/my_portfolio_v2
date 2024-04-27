import React, { useEffect } from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  let data = db.portfolioItems.mockups;

  data = [...data, ..._crawlMockups()];

  return (
    <div className="grid grid-cols-4">
      {data.map((item: any, index: number) => {
        return (
          <div key={index}>
            <h1>{data}</h1>
            <p>{item}</p>
            <Image src={item} alt="mockup" width={1000} height={1000}></Image>
          </div>
        );
      })}
    </div>
  );
}

function _crawlMockups() {
  let links = [];

  // Iterate over each portfolio item
  for (let key in db.portfolioItems) {
    const portfolioItem = db.portfolioItems[key];

    // Iterate over each item in the portfolio item
    if (Array.isArray(portfolioItem)) {
      portfolioItem.forEach((item) => {
        // Check if the item type is "web" or "apps"
        Object.keys(item).forEach((key) => {
          if (key.toLowerCase() === "apps" || key === "web") {
            // Check if the item has a "mockup" key
            if (item[key].imageLink) {
              links.push(item[key].imageLink);
            }
          }
        });
      });
    }
  }

  // Return the collected links
  return links;
}
