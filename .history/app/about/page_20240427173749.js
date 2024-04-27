import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col mt-11 p-5 md:flex-row">
        <h1 className="text-5xl font-bold text-center text-secondary-color">
          About me
        </h1>
        <p className="mt-9 bg-[#edf5fa] p-5 shadow rounded-md md:p-11">
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
