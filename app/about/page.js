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
  Hi, I&apos;m Hammad Bin Tayyab, a dedicated and innovative Software Engineer based in Lucknow, India. I specialize in software design and development, with a strong focus on creating scalable, efficient, and intuitive applications. My experience spans a diverse range of projects, where I not only build robust solutions but also drive creative problem-solving to address complex challenges across various domains.
  <br />
  <br />
  From developing seamless user experiences to architecting high-performance systems, I am passionate about delivering results that make a real impact. You can explore a selection of my work in the 
  <Link href={"/#work"} className="font-bold mx-1">
    Work Section
  </Link> 
  of my portfolio.
  <br />
  <br />
  Outside of my work, I continuously explore new technologies, pushing myself to stay at the forefront of the ever-evolving tech landscape. Whether experimenting with new tools or refining my craft, I’m always eager to take on new challenges and build something amazing.
</p>


      </div>
    </div>
  );
}
