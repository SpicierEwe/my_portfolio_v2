import Link from "next/link";

import { Metadata } from "next";

export const metadata = {
  title: "About Hammad",
  description:
    "Learn more about Hammad Bin Tayyab and his journey in design and development. Discover his passion for creating innovative solutions.",
};
export default function AboutPage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-center text-5xl md:text-7xl mt-14 mb-5 text-[#025a4e] font-black">
        I&apos;m Hammad.
      </h1>
      <div className="flex flex-col mt-11 md:mt-20 py-11 px-5 gap-11  md:flex-row items-center gap-x-7  bg-[url('/images/bgs/about_bg.svg')]">
        <h2 className="text-4xl font-bold text-center text-secondary-color md:text-7xl w-full">
          About me
        </h2>

        <p className="shadow-md rounded-lg bg-white p-5 md:p-9">
          Hello, I&apos;m Hammad Bin Tayyab, a resident of the beautiful city of
          Lucknow, India, where I&apos;ve spent most of my life so far.
          <br />
          <br />
          I completed my intermediate studies at S.T. Fidelis College and am
          currently pursuing a Bachelors degree in Computer Applications at
          Integral University, Lucknow.
          <br />
          <br />I have a passion for design and creation, with experience
          working on a variety of projects ranging from designing commercial
          ventures to developing complete applications. You can find examples of
          my work in the
          <Link href={"/#work"} className="font-bold mx-1">
            Work Section
          </Link>
          of my portfolio.
          <br />
          <br />
          When I&apos;m not designing or developing, I enjoy exploring new
          interests and making the most of life.
        </p>
      </div>
    </div>
  );
}
