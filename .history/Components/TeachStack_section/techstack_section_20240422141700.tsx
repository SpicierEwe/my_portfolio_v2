import { SectionTitle } from "@/Core/Widgets/widgets";
import { db } from "@/core/db/db";

export default function TechStackSection() {
  let techStack = Object.keys(db.portfolioItems).map((key) => {
    return db.portfolioItems[key].map((item) => {});
  });
  return (
    <div>
      <SectionTitle
        title="Tech Stack"
        subtitle="All technologies I've used across my projects"
        // titleClassName="font-bold"
      />
    </div>
  );
}
