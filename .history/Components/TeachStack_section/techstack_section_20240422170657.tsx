import { SectionTitle } from "@/Core/Widgets/widgets";
import { db } from "@/core/db/db";
import { getIcon } from "@/core/utils/utils";

export default function TechStackSection() {
  const techStackContent = [] as string[] | any[];

  // Iterate through the portfolio items and collect techStack
  Object.keys(db.portfolioItems).forEach((key: string) => {
    db.portfolioItems[key].forEach((item: any) => {
      techStackContent.push(...item.techStack);
    });
  });

  // Create a Set to remove duplicates and convert it to an array
  const uniqueTechStack = Array.from(new Set(techStackContent));

  return (
    <div>
      <SectionTitle
        title="Tech Stack"
        subtitle="All technologies I've used across my projects"
      />

      <div className="grid grid-cols-1">
        {uniqueTechStack.map((tech, index) => (
          <div key={index}>
            {
              <div>
                {getIcon(tech, "w-12 h-12 text-3xl")}

                <p>{tech}</p>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
