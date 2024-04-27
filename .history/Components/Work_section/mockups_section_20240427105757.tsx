import React, { useEffect } from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  let data = db.portfolioItems.mockups;

  return (
    <div className="grid grid-cols-2">
      {data.map((item, index) => {
        return (
          <div key={index} className="p-4">
            {item}
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
        if (key.toLowerCase() === "web" || key.toLowerCase() === "apps") {
          links.push(item.imageLink);
        }
        if (key.toLowerCase() === "ux") {
          console.log(item["case_study"]["mockups"]);

          const mockups = item["case_study"]["mockups"];
          mockups.forEach((mockup) => {
            Object.keys(mockup).forEach((key) => {
              mockup[key].forEach((link) => {
                links.push(link);
              });
            });
          });
        }
      });
    }
  }

  // Return the collected links
  return links;
}
