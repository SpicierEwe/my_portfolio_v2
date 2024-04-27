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
        <div className="h-screen flex flex-col items-center justify-center ">
          <div className="relative mb-3">
            <p className="font-custom_sans font-thin tracking-wide text-gray-500">
              aDesigner & _aDeveloper
            </p>

            {/* underline image */}
            <svg
              className="right-0 absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="71"
            >
              <g fill="none" data-name="Group 63">
                <path d="M0 0h71v71H0z" data-name="Rectangle 99" />
                <g stroke="#779ace" stroke-width="2" data-name="Group 62">
                  <path
                    d="M4 35.64s16.184-2.915 30.463-2.618a118.68 118.68 0 0 1 26.654 3.808"
                    data-name="Path 27"
                  />
                  <path
                    d="M9.373 37.554s16.184-2.915 30.463-2.618a118.68 118.68 0 0 1 26.654 3.808"
                    data-name="Path 28"
                  />
                </g>
              </g>
            </svg>
          </div>

          <h1 className="font-garmond uppercase text-2xl whitespace-nowrap">
            {devName} <span className="text-secondary-color">&apos;</span>s
          </h1>
          <p className="uppercase tracking-widest text-xl mt-2 ">
            port<span className="text-accent-color">folio</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
