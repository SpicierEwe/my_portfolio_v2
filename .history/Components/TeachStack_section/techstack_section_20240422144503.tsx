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
        {filteredArray.map((item: string, index: number) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-24 border-2 border-gray-200 rounded-lg"
            >
              <img
                src={`/icons/${item}.svg`}
                alt={item}
                className="w-12 h-12"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
