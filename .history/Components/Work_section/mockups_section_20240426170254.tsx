import React, { useEffect } from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  let data = db.portfolioItems.mockups;

  data = [...data, ..._crawlMockups()];

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="grid grid-cols-4">
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

function _crawlMockups() {
  let links = [];

  // Iterate over each portfolio item
  for (let key in db.portfolioItems) {
    const portfolioItem = db.portfolioItems[key];

    // Iterate over each item in the portfolio item
    if (Array.isArray(portfolioItem)) {
      portfolioItem.forEach((item) => {
        // Check if the item type is "web" or "apps"
        if (item.type === "web" || item.type === "apps") {
          // Iterate over subitems in the item
          if (Array.isArray(item)) {
            item.forEach((subItem) => {
              // Check if subItem and subItem.imageLink exist
              if (subItem && subItem.imageLink) {
                // Push relevant data to links
                links.push({
                  id: subItem.id,
                  title: subItem.title,
                  imageLink: subItem.imageLink,
                  type: item.type,
                });
              }
            });
          }
        }
      });
    }
  }

  // Return the collected links
  return links;
}
