import DevicePreview from "@/Components/Device_preview/device_preview";
import HeroSection from "@/Components/Hero_section/hero_section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <DevicePreview />
      </div>
      <HeroSection />
    </main>
  );
}
