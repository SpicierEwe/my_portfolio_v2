import { websitesDb } from "./sub_db_data/websites_db";
import { appsDb } from "./sub_db_data/apps_db";
import { uxDb } from "./sub_db_data/ux_db";

export const db = {
  portfolioItems: {
    web: websitesDb,
    apps: appsDb,
    ux: uxDb,
    mockups: mockupsDb,
  },
};
