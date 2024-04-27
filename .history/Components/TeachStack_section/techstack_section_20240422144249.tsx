import { SectionTitle } from "@/Core/Widgets/widgets";
import { db } from "@/core/db/db";

export default function TechStackSection() {
  const techStackContent = [] as string[] | any[];

  Object.keys(db.portfolioItems).map((item: string) =>
    db["portfolioItems"][item].map((item: any, index: number) => {
      techStackContent.push(...item["techStack"]);
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

      <div>{techStackContent}</div>
      <br />
      <br />
      <br />
      <br />
      <div>{typeof set}</div>
    </div>
  );
}
