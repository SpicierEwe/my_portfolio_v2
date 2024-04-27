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

      <div className="grid grid-cols-2 sm:grid-cols-3 max-w-4xl aspect-square justify-center items-center gap-5 mx-5 my-3 mt-14 mb-16">
        {uniqueTechStack.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-50 border  w-25 h-auto flex flex-col items-center justify-center p-5 rounded-lg"
          >
            {getIcon(tech, "w-12 h-12")}
            <p className="mt-3 text-center">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
