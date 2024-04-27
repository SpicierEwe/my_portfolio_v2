import { websitesDb } from "./sub_db_data/websites_db";
import { appsDb } from "./sub_db_data/apps_db";
import { uxDb } from "./sub_db_data/ux_db";
import { mockupsDb } from "./sub_db_data/mockups_db";

export interface db {
  portfolioItems:  {
    web: any[];
    apps: any[];
    ux: any[];
    mockups: any[];
  };
  }
 
}

export const db = {
  portfolioItems: {
    web: websitesDb,
    apps: appsDb,
    ux: uxDb,
    mockups: mockupsDb,
  },
};
