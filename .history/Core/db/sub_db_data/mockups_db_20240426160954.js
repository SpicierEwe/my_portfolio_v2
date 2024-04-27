import { db } from "../db";

function _crawlMockups() {
  db.portfolioItems.map((item, index) => {
    if (item.type === "web" || item.type === "apps") {
      item.map((subItem, subIndex) => {});
    }
  });
}

export const mockupsDb = [];
