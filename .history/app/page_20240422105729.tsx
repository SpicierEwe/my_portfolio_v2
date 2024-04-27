import DevicePreview from "@/Components/Device_preview/device_preview";
import HeroSection from "@/Components/Hero_section/hero_section";
import WorkSection from "@/Components/Work_section/work_section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="basolute z-30 overflow-hidden bottom-0 ">
        <DevicePreview />
      </div>
      {/* <div className="overflow-hidden">
        <HeroSection />
      </div> */}

      <WorkSection />
    </main>
  );
}
