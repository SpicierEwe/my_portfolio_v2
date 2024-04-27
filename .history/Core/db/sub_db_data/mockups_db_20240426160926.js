import { db } from "../db";

function _crawlMockups() {
  db.portfolioItems.map((item, index) => {
    if (item.type === "web" || item.type === "apps") {
      mockupsDb.push(item);
    }
  });
}

export const mockupsDb = [];
