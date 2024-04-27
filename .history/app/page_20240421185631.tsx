import DevicePreview from "@/Components/Device_preview/device_preview";
import HeroSection from "@/Components/Hero_section/hero_section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="absolute z-30">
        <DevicePreview />
      </div>
      <HeroSection />
    </main>
  );
}
