import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  const [data, setData] = useState(db.portfolioItems.mockups);

  useEffect(() => {
    const { phoneMockups, otherMockups } = _crawlMockups();

    const newData = [
      {
        phone_mockup_links: [...data[0]["phone_mockup_links"], ...phoneMockups],

        other_mockup_links: [...data[0]["other_mockup_links"], ...otherMockups],
      },
    ];

    setData(newData);

    // Update the data state
  }, []);

  return (
    <div className="mt-11 mx-auto max-w-6xl">
      {data.map((item, index) => {
        return (
          <div key={index}>
            {Object.keys(item).map((key, index) => {
              const isPhoneMockup = key === "phone_mockup_links";
              return (
                <div key={index}>
                  <div
                    className={`grid ${
                      isPhoneMockup
                        ? "grid-cols-2 md:grid-cols-3 md:gap-y-14 lg:grid-cols-4"
                        : "grid-cols-1 gap-y-14 lg:grid-cols-2"
                    } gap-x-4 gap-y-7 p-3`}
                  >
                    {item[key].map((link, index) => {
                      return (
                        <div key={index}>
                          {!isPhoneMockup && (
                            <Image
                              className="mb-1"
                              src="/images/miscellaneous/mockups_browser_top_pannel.svg"
                              height={1000}
                              width={1000}
                            ></Image>
                          )}
                          <Image src={link} width={1000} height={1000} />
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
        // if ux is found, crawl the mockups
        if (key.toLowerCase() === "ux") {
          console.log(item["case_study"]["mockups"]);

          const mockups = item["case_study"]["mockups"];
          mockups.forEach((mockup) => {
            Object.keys(mockup).forEach((key) => {
              if (key === "phone_image_link") {
                mockup[key].forEach((link) => {
                  phoneMockups.push(link);
                });
              }
              if (key === "web_image_link") {
                mockup[key].forEach((link) => {
                  otherMockups.push(link);
                });
              }
            });
          });
        }

        // Check if the item type is "web" or "apps"
        if (key.toLowerCase() === "web" || key.toLowerCase() === "apps") {
          otherMockups.push(item.imageLink);
        }
      });
    }
  }

  // Return the collected links

  return {
    phoneMockups,
    otherMockups,
  };
}
