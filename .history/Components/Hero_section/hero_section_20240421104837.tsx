import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-screen h-screen bg-pink-100">
      <div>
        <div>
          <Image src={"/bgs/pattern_1.png"}></Image>
        </div>
        <h1>Hero Section</h1>
        <p>Hero section content</p>
      </div>
    </section>
  );
}
