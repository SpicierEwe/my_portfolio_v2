import { db } from "../db";

export const mockupsDb = [];

function _crawlMockups() {
  db.portfolioItems.map((item, index) => {
    if (item.type === "web" || item.type === "apps") {
      item.map((subItem, subIndex) => {
        if (subItem.imageLink) {
          mockupsDb.push({
            id: subItem.id,
            title: subItem.title,
            imageLink: subItem.imageLink,
            type: item.type,
          });
        }
      });
    }
  });
}
