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
    <section className="pt-12 mb-14 md:mt-12">
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
        <Image
          className="mx-auto shadow-md border border-gray-300 rounded-md"
          src={imageLink}
          width={2000}
          height={2000}
          alt={`${projectName} image`}
        ></Image>
      </div>

      {/* ============= */}
      <main className="max-w-5xl justify-center mx-auto mt-20 md:mt-28 px-6">
        <h2 className="text-center text-xl tracking-wide">ABOUT</h2>
        <div className="mt-14 md:mt-20 flex flex-col smd:flex-col md:flex-row gap-x-9 gap-y-10 mb-9 items-start flex-wrap">
          {/* div 1 */}
          <div>
            <div className="md:shadow md:px-5 md:py-7 md:border max-w-lg">
              <h4 className="text-md font-bold text-gray-600">Summary</h4>
              <p
                className="mt-5"
                dangerouslySetInnerHTML={{ __html: info }}
              ></p>
            </div>

            <div className="mt-11">
              {/* tech stack */}

              <DisplayElements
                mainDivClasses="md:shadow md:px-11 md:py-7  md:border flex-1"
                childClasses="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 mt-9"
                sectionName="Techstack"
                info={info}
                dataList={techStack}
              />
            </div>
          </div>

          {/* div 2 */}

          {/* roles */}
          <DisplayElements
            mainDivClasses="md:shadow md:px-11 md:py-7 md:border flex-1"
            childClasses="grid grid-cols-1  max-[600px]:bg-sky-300d gap-x-5 gap-y-7 mt-9"
            sectionName="Roles"
            info={info}
            dataList={roles}
          />

          {/* </div> */}
        </div>

        {/* visible in mobile */}

        {/* <div className="md:hidden mt-10">
          <DisplayElements
            mainDivClasses="md:shadow md:px-11 md:py-7 md:border flex-1"
            childClasses="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 mt-9"
            sectionName="Techstack"
            info={info}
            dataList={techStack}
          />
        </div> */}
      </main>
    </section>
  );
}

function DisplayElements(props: any) {
  const {
    sectionName,
    info: string,
    dataList,
    mainDivClasses,
    childClasses,
  } = props;

  return (
    <div className={mainDivClasses}>
      <div className="flex gap-x-5 items-center shadow w-min px-3 py-2 rounded">
        {getIcon(sectionName, "w-5 h-5")}
        <h3 className="text-md font-bold text-gray-600">{sectionName}</h3>
      </div>

      <div className={childClasses}>
        {dataList.map((tech: string, index: number) => (
          <div key={index} className="flex gap-5 items-center">
            {getIcon(tech, "w-5 h-5 md:w-7 md:h-7")}
            {tech}
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
