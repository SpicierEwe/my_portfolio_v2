"use client";
import { db } from "@/core/db/db";
import { getIcon } from "@/core/utils/utils";
import Image from "next/image";
import { MdWork } from "react-icons/md";

export default function Project({ params }) {
  const { id } = params;
  const {
    projectName,
    imageLink,
    projectTagLine,
    info,
    techStack,
    roles,
    link,
  } = getProjectData(id)[0];

  return (
    <section className="pt-12 mb-14 md:pt-24">
      {/* project name */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-7xl font-semibold md:text-gray-800 uppercase tracking-wide md:tracking-wider text-center">
          {projectNameFunc(projectName)}
        </h1>
        <p className="mt-1 md:mt-4 text-gray-500 text-center md:text-xl ">
          {projectTagLine}
        </p>
      </div>

      {/* project image */}
      <div className="mt-16 px-5 mx-auto max-w-5xl md:mt-36 gap-x-3">
        {/* top website bar */}
        <div className="flex px-3 py-2 border gap-x-2 mb-1 items-center justify-between overflow-hidden">
          <div className="flex gap-x-2">
            <div className=" w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
            <div className=" w-2 h-2 md:w-3 md:h-3  rounded-full bg-orange-500"></div>
            <div className=" w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
          </div>
          {/* dummy browser search bar */}
          <div className="flex bg-gray-200 rounded-full px-1 py-0.5 items-center justify-start gap-x-2 max-w-md grow">
            {getIcon("lock", "rounded-full p-1 bg-white")}

            <input
              className="bg-gray-200 w-max focus:outline-none text-xs md:text-lg grow"
              value={link}
              type="text"
              placeholder="Search or type URL"
            />
            {getIcon("star", "rounded-full p-1 bg-white")}
          </div>
          <div>{getIcon("settings")}</div>
        </div>
        {/* ============ */}
        <a href={link} target="_blank">
          <Image
            className="mx-auto shadow-md border border-gray-300 rounded-md hover:translate-y-2  transition-transform duration-500 ease-in-out cursor-pointer"
            src={imageLink}
            width={2000}
            height={2000}
            alt={`${projectName} image`}
          ></Image>
        </a>
      </div>

      {/* ============= */}
      <main className="max-w-5xl justify-center mx-auto mt-20 md:mt-28 px-6">
        <h2 className="text-center text-xl md:text-2xl text-gray-600 font-semibold tracking-wider">
          ABOUT
        </h2>
        <div className="mt-14 md:mt-20 flex flex-col  gap-x-9 gap-y-10 mb-9 items-start flex-wrap">
          {/* div 1 */}
          <div>
            <div className="px-0 py-7">
              <div className="shadow w-min py-2 px-3 flex items-center gap-3">
                {getIcon("summary", "w-5 h-5")}
                <h4 className="rounded text-md font-bold text-gray-600">
                  Summary
                </h4>
              </div>
              <p
                className="mt-7 max-w-2xl leading-relaxed p-5 shadow border"
                dangerouslySetInnerHTML={{ __html: info }}
              ></p>
            </div>
          </div>

          {/* div 2 */}

          <div className="w-full flex flex-col sm:flex-row gap-9 gap-y-16 md:mt-9">
            {/* roles */}
            <DisplayElements
              mainDivClasses=""
              childClasses="mt-10 border p-10 shadow grid md:grid-cols-2 gap-x-5 gap-y-7"
              sectionName="Roles"
              info={info}
              dataList={roles}
            />

            <DisplayElements
              mainDivClasses=""
              childClasses="mt-10 border shadow p-10 grid lg:grid-cols-2 gap-x-5 gap-y-7"
              sectionName="Techstack"
              info={info}
              dataList={techStack}
            />
          </div>
        </div>
      </main>
    </section>
  );
}

function DisplayElements(props: any) {
  const { sectionName, dataList, mainDivClasses, childClasses } = props;

  return (
    <div className={`${mainDivClasses}`}>
      <div className="flex gap-x-5 items-center shadow w-min px-3 py-2 rounded">
        {getIcon(sectionName, "w-5 h-5")}
        <h3 className="text-md font-bold text-gray-600">{sectionName}</h3>
      </div>

      <div className={`${childClasses}`}>
        {dataList.map((tech: string, index: number) => (
          <div key={index} className="flex gap-5 items-center">
            <div className="shadow-inner bg-gray-50 border rounded-full p-2">
              {getIcon(tech, "w-5 h-5 md:w-6 md:h-6 animate-wiggle")}
            </div>
            <p className="text-sm">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getProjectData(id: string) {
  return Object.keys(db.portfolioItems).map((key) => {
    return (db.portfolioItems as any)[key].find(
      (item: any) => item.projectId === id
    );
  });
}

function projectNameFunc(name: string): JSX.Element {
  // Calculate the length of the string
  const length = name.length;
  const percentage = 70;

  // Extract the rest of the string (excluding the last 3 characters)
  const restOfString = name.slice(0, (length * percentage) / 100);

  // Extract the last 3 characters of the string
  const lastThirtyPercent = name.slice((length * percentage) / 100);

  return (
    <p>
      {restOfString}
      <span className="text-secondary-color">
        {lastThirtyPercent}
        <span className="animate-pulse">.</span>
      </span>
    </p>
  );
}
