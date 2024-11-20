import Link from "next/link";

export const metadata = {
  title: "About me | Hammad",
  description:
    "Learn more about me Hammad Bin Tayyab and my journey in design and development. Discover my passion for creating innovative solutions.",
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
          Hello, I&apos;m Hammad Bin Tayyab, based in Lucknow, India. I am
          currently in my final year, pursuing a Bachelor&apos;s degree in
          Computer Applications.
          <br />
          <br />I have a strong passion for design and development, with
          extensive experience across a variety of projects, including designing
          commercial ventures and building comprehensive applications. You can
          view some of my work in the
          <Link href={"/#work"} className="font-bold mx-1">
            Work Section
          </Link>
          of my portfolio.
          <br />
          <br />
          When I&apos;m not focused on design or development, I enjoy exploring
          new interests and continually learning from life&apos;s experiences.
        </p>
      </div>
    </div>
  );
}
