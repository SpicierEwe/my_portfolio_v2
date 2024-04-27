import Image from "next/image";

export default function HeroSection() {
  const devName = "hammad bin tayyab";
  return (
    <section className="w-screen h-dvh relative bg-pink-50 ">
      <div className="absolute w-screen h-dvh bg-red-500 -z-10"></div>
      <main>
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
        <section className="h-screen flex flex-col items-center justify-center">
          <div className="relative mb-3">
            <p className="font-custom_sans tracking-wide text-gray-500">
              _aDesigner & _aDeveloper
            </p>

            {/* underline image */}

            <svg
              className="right-0 absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="101.479"
              height="11.258"
            >
              <g
                fill="none"
                stroke="#779ace"
                stroke-width="2"
                data-name="Group 61"
              >
                <path
                  d="M.178 5.277S26.342.564 49.428 1.045A191.867 191.867 0 0 1 92.52 7.201"
                  data-name="Path 27"
                />
                <path
                  d="M8.864 8.372s26.164-4.713 49.25-4.232a191.867 191.867 0 0 1 43.092 6.156"
                  data-name="Path 28"
                />
              </g>
            </svg>
          </div>

          {/* dev name */}
          <h1 className="font-garmond uppercase text-2xl whitespace-nowrap">
            {devName} <span className="text-secondary-color">&apos;</span>s
          </h1>
          {/*  title */}
          <p className="uppercase tracking-widest text-xl mt-2 ">
            port<span className="text-accent-color">folio</span>.
          </p>
          {/* date */}
          <p className="text-xs mt-2">{formatDate()}</p>
        </section>
        <Image
          className="absolute bottom-2 right-1/2 animate-bounce cursor-pointer"
          src={"/images/pointer.png"}
          height={21}
          width={21}
          alt="next section pointer"
        ></Image>
      </main>
    </section>
  );

  // date display function
  function formatDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric", // 'numeric' is the correct type
      month: "long", // 'long' is the correct type
      year: "numeric", // 'numeric' is the correct type
    };
    return new Date().toLocaleDateString("en-US", options);
  }
}
