import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-screen h-screen relative">
      <div>
        <div className="absolute">
          <Image
            src={"/images/bgs/pattern_1.png"}
            alt="pattern image"
            height={45}
            width={45}
          ></Image>
          <Image
            src={"/images/bgs/pattern_2.png"}
            alt="pattern image"
            height={45}
            width={45}
          ></Image>
        </div>
        <div className="h-screen flex columns items-center justify-center">
          <h1>Hero Section</h1>
          <p>Hero section content</p>
        </div>
      </div>
    </section>
  );
}
