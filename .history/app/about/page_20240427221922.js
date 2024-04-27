import Link from "next/link";

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
          Hi, I&#39;m Hammad Bin Tayyab, I&#39;m a resident of a beautiful city
          of India called Lucknow where I&#39;ve spent most of my life till now.
          <br />
          <br />
          I&#39;ve completed my intermeidates from S.T. Fidelis College and
          currently pursuing my Bachelors in Computer Applications at Integral
          University, Lucknow.
          <br />
          <br />I love designing and creating! I&#39;ve previously worked on a
          variety of projects, from designing commercial projects to building
          entire applications. You can find them all at the &lt;Link
          href=\&quot;/#work\&quot; className=\&quot;font-bold mx-1\&quot;&gt;
          Work Section &lt;/Link&gt; of my Portfolio.
          <br />
          <br /> When I&#39;m not designing or developing, you can find me
          exploring new things and enjoying life.
        </p>
      </div>
    </div>
  );
}
