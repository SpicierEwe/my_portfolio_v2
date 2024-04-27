import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../core/db/db";
import BrowserBarWidget from "../../core/widgets/browser_bar_widget";

type PortfolioItem = {
  phone_mockup_links?: string[];
  other_mockup_links?: string[];
  [key: string]: string[] | undefined;
};

export default function MockupsSection(): JSX.Element {
  const [data, setData] = useState<PortfolioItem[]>(
    db.portfolioItems.mockups as PortfolioItem[]
  );

  useEffect(() => {
    const { phoneMockups, otherMockups } = _crawlMockups();

    const newData: PortfolioItem[] = [
      {
        phone_mockup_links: [
          ...(data[0]?.phone_mockup_links ?? []),
          ...phoneMockups,
        ],
        other_mockup_links: [
          ...(data[0]?.other_mockup_links ?? []),
          ...otherMockups,
        ],
      },
    ];

    setData(newData);
  }, [data]);

  return (
    <div className="mt-11 mx-auto max-w-screen-xl md:mt-20">
      {data.map((item, index) => (
        <div key={index}>
          {Object.keys(item).map((key, index) => {
            const isPhoneMockup = key === "phone_mockup_links";
            const links = item[key] as string[]; // Type cast

            return (
              <div key={index}>
                <div
                  className={`grid ${
                    isPhoneMockup
                      ? "grid-cols-2 md:grid-cols-3 md:gap-y-14 md:gap-x-9 lg:grid-cols-4"
                      : "grid-cols-1 gap-y-9 md:gap-y-14 md:gap-x-12 lg:grid-cols-2 mt-7 md:mt-14"
                  } gap-x-4 gap-y-7 p-3`}
                >
                  {links?.map((link, index) => (
                    <div key={index}>
                      {!isPhoneMockup && (
                        <BrowserBarWidget
                          link={link}
                          fromMdFontSize={"text-md"}
                        />
                      )}
                      <Image src={link} width={1000} height={1000} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function _crawlMockups(): { phoneMockups: string[]; otherMockups: string[] } {
  let phoneMockups: string[] = [];
  let otherMockups: string[] = [];

  // Iterate over each portfolio item
  for (const key in db.portfolioItems) {
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
