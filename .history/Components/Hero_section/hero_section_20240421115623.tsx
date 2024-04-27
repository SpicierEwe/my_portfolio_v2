import Image from "next/image";

export default function HeroSection() {
  const devName = "hammad bin tayyab";
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
        <div className="font-Garmond h-screen flex flex-col items-center justify-center ">
          <p className="font-custom_sans font-thin tracking-wide text-gray-7000">
            aDesigner & _aDeveloper
          </p>
          <h1 className="font-['Garmond'] uppercase text-2xl whitespace-nowrap">
            {devName} <span className="text-secondary-color">&apos;</span>s
          </h1>
          <p className="uppercase tracking-widest text-xl mt-2 ">portfolio.</p>
        </div>
      </div>
    </section>
  );
}
