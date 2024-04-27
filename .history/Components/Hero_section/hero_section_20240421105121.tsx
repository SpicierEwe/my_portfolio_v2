import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-screen h-screen">
      <div>
        <div>
          <Image
            src={"/images/bgs/pattern_1.png"}
            alt="pattern image"
            height={45}
            width={45}
          ></Image>{" "}
          <Image
            src={"/images/bgs/pattern_1.png"}
            alt="pattern image"
            height={45}
            width={45}
          ></Image>
        </div>
        <h1>Hero Section</h1>
        <p>Hero section content</p>
      </div>
    </section>
  );
}
