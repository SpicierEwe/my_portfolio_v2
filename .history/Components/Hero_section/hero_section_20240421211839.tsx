import Image from "next/image";

export default function HeroSection() {
  const devName = "Hammad Bin Tayyab";

  return (
    <section className="w-screen h-dvh overflow-hidden relative">
      <div className="absolute backdrop-blur-2xl w-screen h-dvh"></div>
      <div className="absolute inset-0 -z-10 h-dvh items-center ">
        <div className="flex justify-between items-center m-auto h-full w-64">
          <Image
            className="animate-levitate"
            src={"/images/bgs/pattern_1.png"}
            alt="pattern image"
            height={115}
            width={115}
            priority={true}
          />

          <Image
            className="animate-levitate_reverse w-1/2"
            src={"/images/bgs/pattern_2.png"}
            alt="pattern image"
            height={125}
            width={125}
          />
        </div>
      </div>

      <div className="h-dvh flex flex-col items-center justify-center absolute inset-0">
        <div className="relative mb-3">
          <p className="font-custom_sans tracking-wide text-gray-500">
            _aDesigner & _aDeveloper
          </p>

          {/* Underline image */}
          <svg
            className="right-0 absolute"
            xmlns="http://www.w3.org/2000/svg"
            width="101.479"
            height="11.258"
          >
            <g
              fill="none"
              stroke="#779ace"
              strokeWidth="2"
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

        {/* Developer name */}
        <h1 className="font-garmond uppercase text-3xl sm:text-4xl md:text-5xl xl:text-6xl whitespace-nowrap">
          {devName} <span className="text-secondary-color">'s</span>
        </h1>
        {/* Title */}
        <p className="uppercase tracking-widest text-2xl mt-2">
          Port<span className="text-accent-color">folio</span>.
        </p>
        {/* Date */}
        <p className="text-xs mt-2">{formatDate()}</p>
      </div>
      {/* Pointer image */}
      <Image
        className="absolute w-auto h-auto bottom-2 right-1/2 animate-bounce cursor-pointer"
        src={"/images/pointer.png"}
        height={15}
        width={15}
        alt="next section pointer"
      />
    </section>
  );

  // Date display function
  function formatDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  }
}
