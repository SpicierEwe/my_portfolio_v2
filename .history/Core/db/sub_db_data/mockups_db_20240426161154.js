import { db } from "../db";

export const mockupsDb = ["/images/case_study/gr/mockups/mockup_image_1.svg"];

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
