import { websitesDb } from "./sub_db_data/websites_db";
import { appsDb } from "./sub_db_data/apps_db";

export const db = {
  portfolioItems: {
    web: websitesDb,
    apps: appsDb,
    ux: [],
    mockups: [],
  },
};
