import HeroSection from "../components/Hero_section/hero_section";

import TechStackSection from "../components//TeachStack_section/techstack_section";
import WorkSection from "../components/Work_section/work_section";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden">
        <HeroSection />
      </div>

      <WorkSection />

      {/* tech stack section */}
      <TechStackSection />
    </main>
  );
}
