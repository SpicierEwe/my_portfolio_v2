import { SectionTitle } from "@/Core/Widgets/widgets";
import { db } from "@/core/db/db";

export default function TechStackSection() {
  let techStack = Object.keys(db.portfolioItems);

  const techStackContent = techStack.map((item) => {
    return db["portfolioItems"][item].map((item: any, index: number) => {
      return item["techStack"];
    });
  });
  return (
    <div>
      <SectionTitle
        title="Tech Stack"
        subtitle="All technologies I've used across my projects"
        // titleClassName="font-bold"
      />

      <div>{techStackContent.toString()}</div>
    </div>
  );
}
