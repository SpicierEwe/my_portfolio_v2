import { SectionTitle } from "@/Core/Widgets/widgets";
import { db } from "@/core/db/db";

export default function TechStackSection() {
  const techStackContent = [] as string[] | any[];

  Object.keys(db.portfolioItems).map((item: string) =>
    db["portfolioItems"][item].map((item: any, index: number) => {
      techStackContent.push(...item["techStack"]);
    })
  );

  const filteredArray = new Set(techStackContent);

  return (
    <div>
      <SectionTitle
        title="Tech Stack"
        subtitle="All technologies I've used across my projects"
        // titleClassName="font-bold"
      />

      <div>
        {filteredArray.forEach((item: string) => {
            return <p>{item}</p>;
            
        }}
      </div>
    </div>
  );
}
