import { SectionTitle } from "@/Core/Widgets/widgets";
import { db } from "@/core/db/db";

export default function TechStackSection() {
  let techStack = Object.keys(db.portfolioItems);

  const techStackContent = [];

  Object.keys(db.portfolioItems).map((item) =>
    techStack.map((item) => {
      db["portfolioItems"][item].map((item: any, index: number) => {
        techStackContent.push(...item["techStack"]);
      });
    })
  );

  const set = new Set(techStackContent);

  return (
    <div>
      <SectionTitle
        title="Tech Stack"
        subtitle="All technologies I've used across my projects"
        // titleClassName="font-bold"
      />

      <div>{set}</div>
      <br />
      <br />
      <br />
      <div>{techStackContent}</div>
      <br />
      <br />
      <br />
      <br />
      <div>{typeof set}</div>
    </div>
  );
}
