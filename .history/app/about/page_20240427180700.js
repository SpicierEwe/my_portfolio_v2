import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-center text-5xl md:text-7xl mt-14 mb-5 text-[#025a4e] font-black">
        I&apos;m Hammad.
      </h1>
      <div className="flex flex-col mt-11 md:mt-20 py-11 px-5 gap-11  md:flex-row items-center gap-x-7 bg-[#edf5fa] 	background-image: url">
        <h2 className="text-4xl font-bold text-center text-secondary-color md:text-7xl w-full">
          About me
        </h2>
        <p className="shadow-md rounded-lg  bg-white p-5 md:p-9">
          Hi, I'm Hammad Bin Tayyab, I'm a resident of a beautiful city of India
          called Lucknow where I've spent most of my life till now.
          <br />
          <br />
          I've completed my intermeidates from S.T. Fidelis College and
          currently pursuing my Bachelors in Computer Applications at Integral
          University, Lucknow.
          <br />
          <br />I love designing and creating! I've previously worked on a
          variety of projects, from designing commercial projects to building
          entire applications. You can find them all at the
          <Link href={"/#work"} className="font-bold mx-1">
            Work Section
          </Link>
          of my Portfolio.
          <br />
          <br /> When I'm not designing or developing, you can find me exploring
          new things and enjoying life.
        </p>
      </div>
    </div>
  );
}
