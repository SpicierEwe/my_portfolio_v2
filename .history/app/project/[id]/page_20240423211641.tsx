"use client";
import { db } from "@/core/db/db";
import { getIcon } from "@/core/utils/utils";
import Image from "next/image";
import { MdWork } from "react-icons/md";

export default function Project({ params }) {
  const { id } = params;
  const { projectName, imageLink, projectTagLine, info, techStack, roles } =
    getProjectData(id)[0];

  return (
    <section className="pt-12 mb-14">
      {/* project name */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl uppercase">{projectName}</h1>
        <p className="mt-1 text-gray-500 text-center">{projectTagLine}</p>
      </div>

      {/* project image */}
      <div className="mt-16 px-5 mx-auto max-w-4xl">
        <Image
          className="mx-auto shadow-md border border-gray-300 rounded-md"
          src={imageLink}
          width={2000}
          height={2000}
          alt={`${projectName} image`}
        ></Image>
      </div>

      {/* ============= */}
      <main className="max-w-screen-lg justify-center mx-auto">
        <div className="mt-16 mx-6 flex flex-col md:flex-row gap-x-9 items-start gap-y-10 flex-wrap">
          {/* div 1 */}
          <div className="md:shadow md:px-5 md:py-7">
            <h4 className="text-md font-bold text-gray-600">Summary</h4>
            <p
              className="mt-5 max-w-lg"
              dangerouslySetInnerHTML={{ __html: info }}
            ></p>
          </div>

          {/* div 2 */}

          {/* <div className="flex flex-col md:flex-row gap-x-5 items-start gap-y-10"> */}
          <DisplayElements sectionName="Roles" info={info} dataList={roles} />
          <DisplayElements
            sectionName="Techstack"
            info={info}
            dataList={techStack}
          />
          {/* </div> */}
        </div>
      </main>
    </section>
  );
}

function DisplayElements(props: any) {
  const { sectionName, info: string, dataList } = props;
  const isTechStack = sectionName === "Techstack";
  return (
    <div className="md:shadow md:px-11 md:py-5">
      <div className="flex flex-col gap-x-5 items-center">
        {getIcon(sectionName, "w-5 h-5")}
        <h3 className="text-md font-bold text-gray-600">{sectionName}</h3>
      </div>

      <div
        className={`mt-7 flex flex-col md:flex-row ${
          isTechStack ? "md:gap-y-9" : ""
        } flex-wrap  gap-y-5`}
      >
        {dataList.map((tech: string, index: number) => (
          <div key={index} className="flex gap-5 ml-5">
            {getIcon(tech, "w-7 h-7")}
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
