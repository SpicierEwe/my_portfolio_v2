import DevicePreview from "@/Components/Device_preview/device_preview";
import HeroSection from "@/Components/Hero_section/hero_section";
import WorkSection from "@/Components/Work_section/work_section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="absolute z-30 overflow-hidden">
        <DevicePreview />
      </div>
      <HeroSection />
      <WorkSection />
    </main>
  );
}
