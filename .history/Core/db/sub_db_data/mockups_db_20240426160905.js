import { db } from "../db";

function _crawlMockups() {
  db.portfolioItems.map((item, index) => {
    if (item.type === "mockups") {
      mockupsDb.push(item);
    }
  });
}

export const mockupsDb = [];
