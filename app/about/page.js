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
  Hi, I'm Hammad Bin Tayyab, a dedicated and innovative Software Engineer based in Lucknow, India. Currently, I am in my final year, pursuing a Bachelor's degree in Computer Applications, where I have honed my skills to bridge the gap between technology and impactful solutions.
  <br />
  <br />
  With a passion for building scalable, efficient, and intuitive software, I specialize in software design and development across a diverse range of domains. From creating robust applications to architecting seamless user experiences, I have a proven track record of delivering results that make a difference. My work includes not only technical solutions but also creative problem-solving for both commercial ventures and cutting-edge projects. You can explore a selection of my work in the 
  <Link href={"/#work"} className="font-bold mx-1">
    Work Section
  </Link> 
  of my portfolio.
  <br />
  <br />
  Outside of coding, I am always exploring emerging technologies, constantly pushing myself to learn, grow, and stay at the forefront of the rapidly changing tech landscape. Whether it’s experimenting with new tools or tackling complex challenges, I thrive on turning ideas into reality. Let’s build something amazing together!
</p>

      </div>
    </div>
  );
}
