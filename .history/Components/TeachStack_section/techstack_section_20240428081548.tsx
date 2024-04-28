import { SectionTitle } from "../../core/widgets/widgets";
import { db } from "../../core/db/db";
import { getIcon } from "../../core/utils/utils";

export default function TechStackSection() {
  const techStackContent = [];

  // Iterate through the portfolio items and collect techStack
  Object.keys(db.portfolioItems).forEach((key) => {
    db.portfolioItems[key].forEach((item) => {
      if (item.techStack && item.techStack.length > 0) {
        techStackContent.push(...item.techStack);
      }
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

      <div className="grid grid-cols-2 px-5 sm:grid-cols-3 max-w-3xl mx-auto aspect-square justify-center items-center gap-5 md:gap-x-7 my-3 mt-14 mb-16">
        {uniqueTechStack.map((tech, index) => (
          <div
            key={index}
            className="bg-white border w-25 h-auto flex flex-col items-center justify-center p-5 rounded-lg group"
          >
            <div className="bg-white rounded-full p-3 border border-secondary-color overflow-hidden drop-shadow animate-wiggle group-hover:bg-red-900 group-hover:scale-110 transition-transform duration-300 ease-in-out ">
              {getIcon(tech, "w-9 h-9 p-1")}
            </div>
            <p className="mt-5 text-center">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
