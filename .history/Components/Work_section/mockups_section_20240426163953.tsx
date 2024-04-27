import React from "react";
import Image from "next/image";
import { db } from "@/core/db/db";

export default function MockupsSection() {
  let data = db.portfolioItems.mockups;

  data = [..._crawlMockups()];

  return (
    <div className="grid grid-cols-1">
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
  db.portfolioItems.map((item, index) => {
    if (item.type === "web" || item.type === "apps") {
      item.map((subItem, subIndex) => {
        if (subItem.imageLink) {
          links.push({
            id: subItem.id,
            title: subItem.title,
            imageLink: subItem.imageLink,
            type: item.type,
          });
        }
      });
    }
  });

  return links;
}
