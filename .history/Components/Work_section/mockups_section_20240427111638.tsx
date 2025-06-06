import React, { useEffect } from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  let data = db.portfolioItems.mockups;

  useEffect(() => {
    const links = _crawlMockups();
    console.log("links = " + links);
  }, []);

  return (
    <div className="grid grid-cols-2">
      {data.map((item, index) => {
        return (
          <div key={index}>
            {Object.keys(item).map((key, index) => {
              return (
                <div key={index}>
                  <h1>{key}</h1>
                  <div className="grid grid-cols-2">
                    {item[key].map((link, index) => {
                      return (
                        <div key={index}>
                          <Image src={link} width={300} height={300} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function _crawlMockups() {
  let phoneMockups = [];
  let otherMockups = [];

  // Iterate over each portfolio item
  for (let key in db.portfolioItems) {
    const portfolioItem = db.portfolioItems[key];

    // Iterate over each item in the portfolio item
    if (Array.isArray(portfolioItem)) {
      portfolioItem.forEach((item) => {
        // Check if the item type is "web" or "apps"
        if (key.toLowerCase() === "web" || key.toLowerCase() === "apps") {
          otherMockups.push(item.imageLink);
        }
        if (key.toLowerCase() === "ux") {
          console.log(item["case_study"]["mockups"]);

          const mockups = item["case_study"]["mockups"];
          mockups.forEach((mockup) => {
            Object.keys(mockup).forEach((key) => {
          phone_image_link: [
            if (key === "") {
                mockup[key].forEach((link) => {
                  phoneMockups.push(link);
                });
              }
              mockup[key].forEach((link) => {
                phoneMockups.push(link);
              });
            });
          });
        }
      });
    }
  }

  // Return the collected links

  console.log(links);
  return links;
}
