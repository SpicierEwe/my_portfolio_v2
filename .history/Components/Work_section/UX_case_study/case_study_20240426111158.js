import { React, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { MdStars } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import { BsPersonFill, BsListCheck } from "react-icons/bs";
import CompetativeAnalysis from "./competative_analysis/competative_analysis";
import WireFrames from "./wire_frames/wire_frames";
import Prototype from "./prototypes/prototype";
import Head from "next/head";
import CaseStudyUtils from "@/Core/utils/case_study_utils/case_study_utils";
export default function CaseStudyComponent(props) {
  const { projectData } = props;

  return (
    <div className="overflow-hidden">
      <Head>
        <title>{projectData["projectName"]}</title>
      </Head>
      {/* Hero image */}
      <div className="relative">
        <Image
          className="w-full"
          src={projectData["case_study"]["image_links"]["hero_image"]}
          width={1000}
          height={1000}
          alt="hero image"
          priority={true}
        />
        <div
          className="flex flex-col gap-3 lg:gap-x-7 mt-5 px-5 md:absolute sm:bottom-0 md:flex-row w-full
        justify-start md:justify-center items-start md:items-center sm:py-5 sm:backdrop-blur-3xl sm:text-black xl:text-xl"
        >
          <div className="sm:flex items-center justify-center">
            <h2 className="font-semibold pr-3">PROJECT:</h2>
            <p className="">{projectData["projectName"]}</p>
          </div>
          <div className="sm:flex items-center justify-center">
            <h2 className="font-semibold pr-3">ROLE:</h2>
            <p>{projectData["case_study"]["role"]}</p>
          </div>
          <div className="sm:flex items-center justify-center">
            <h2 className="font-semibold pr-3">DURATION:</h2>
            <p>{projectData["case_study"]["project_duration"]}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="m-5">
          <CaseStudyUtils.CaseStudySectionTitle title="Project Overview" />
          <div className="mt-14 md:mt-36 grid grid-cols-1 gap-5  gap-y-9 md:grid-cols-2 max-w-6xl mx-auto md:text-lg md:gap-x-11 items-center">
            <div>
              <h3 className="uppercase font-semibold">The Product</h3>
              <p className="mt-3 md:leading-relaxed md:mb-11 max-w-lg">
                {projectData["case_study"]["project_overview"]["the_product"]}
              </p>
            </div>
            <Image
              src={projectData["case_study"]["image_links"]["product_image"]}
              width={1000}
              height={1000}
              alt="product image"
            />
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="grid grid-cols-1 gap-y-2 mt-14 md:grid-cols-2 max-w-screen-lg mx-auto md:py-11 md:gap-x-9 md:gap-y-12">
            <div className="flex flex-col gap-5 p-5">
              <MdStars
                size={45}
                color={projectData["case_study"]["accent_color"]}
              />
              <h3 className="font-semibold">The Goal</h3>
              <p className="max-w-lg">
                {projectData["case_study"]["project_overview"]["the_goal"]}
              </p>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <MdReportProblem
                size={45}
                color={projectData["case_study"]["accent_color"]}
              />
              <h3 className="font-semibold">The Problem</h3>
              {projectData["case_study"]["project_overview"]["the_problem"].map(
                (item, index) => (
                  <div key={index} className="flex gap-x-2 max-w-lg">
                    <p>{index + 1})</p>
                    <p>{item.toString()}</p>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col gap-5 p-5">
              <BsPersonFill
                size={45}
                color={projectData["case_study"]["accent_color"]}
              />
              <h3 className="font-semibold">My Role</h3>
              <p className="flex gap-x-2 max-w-lg">
                {projectData["case_study"]["project_overview"]["my_role"]}
              </p>
            </div>

            <div className="flex flex-col gap-5 p-5">
              <BsListCheck
                size={45}
                color={projectData["case_study"]["accent_color"]}
              />
              <h3 className="font-semibold">Responsibilities</h3>
              <p className="flex gap-x-2 max-w-lg">
                {
                  projectData["case_study"]["project_overview"][
                    "responsibilities"
                  ]
                }
              </p>
            </div>
          </div>
        </div>

        {/* Competative analysis */}
        <CompetativeAnalysis projectData={projectData} />

        {/* User research */}
        <div className="px-5 mx-auto">
          <h2 className="font-bold text-center text-xl mt-16 mb-11">
            <CaseStudyUtils.CaseStudySectionTitle title="     User Research" />
          </h2>
          <div>
            <div className="max-w-3xl mx-auto">
              <CaseStudyUtils.CaseStudySubSectionTitle title="Summary" />
              <p
                className="mt-5 text-md md:text-lg"
                dangerouslySetInnerHTML={{
                  __html: projectData["case_study"]["user_research"]["summary"],
                }}
              />
            </div>
          </div>
          <div>
            <div className="max-w-screen-xl mx-auto mt-11 md:mt-20">
              <CaseStudyUtils.CaseStudySubSectionTitle
                title="Pain Points"
                className="pt-11 md:mt-20 pb-5"
              />
              {projectData["case_study"]["user_research"]["pain_points"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-14 my-5"
                  >
                    {Object.keys(item).map((key, index2) => (
                      <div
                        key={index2}
                        className="flex flex-col gap-5 shadow border p-8 md:shadow-md"
                      >
                        <div className="rounded-full  bg-red-500 w-min px-3 py-1 shadow ">
                          <p className=" text-white">{index2 + 1}</p>
                        </div>
                        <h4 className="font-semibold">{key}</h4>
                        {item[key].map((item2, index3) => (
                          <p key={index3}>{item2}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* User personas */}
        <div className="max-w-6xl mx-auto">
          <CaseStudyUtils.CaseStudySectionTitle title="Meet the Users" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {projectData["case_study"]["user_research"]["personas"].map(
              (persona, index) => (
                <div key={index} className="p-3 m-3 shadow border ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 items-start md:items-center border rounded-md shadow-md p-5 ">
                    {/* iamge contianer */}
                    <div className="overflow-hidden rounded-full border border-orange-500 w-28 h-28 md:w-40 md:h-40">
                      <Image
                        className="w-full h-full object-cover"
                        alt="user image"
                        src={`${persona["user_info"]["user_image"]}`}
                        width={500}
                        height={500}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      {Object.keys(persona["user_info"]).map((item, index2) => (
                        <div key={index2} className="flex gap-3">
                          <div className="font-semibold ">
                            {item !== "user_image" &&
                              `${item
                                .replace("user_", "")
                                .charAt(0)
                                .toUpperCase()}${item
                                .replace("user_", "")
                                .slice(1)}:`}
                          </div>
                          <p className="">
                            {item !== "user_image" &&
                              persona["user_info"][item]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-1 md:px-3 mb-5">
                    <p className="text-center my-5 italic">
                      <span>“</span>
                      {persona["user_dream"]}
                      <span>”</span>
                    </p>
                    <div>
                      <h3 className="font-semibold">Goals</h3>
                      <div className="flex flex-col gap-3 mt-5">
                        {persona["user_goals"].map((item, index) => (
                          <div key={index}>
                            <p>
                              <span
                                className={`text-green-600 pr-2
                                ]`}
                              >
                                •
                              </span>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mt-5">Frustrations</h3>
                      <div className="flex flex-col gap-3 mt-5">
                        {persona["user_frustrations"].map((item, index) => (
                          <div key={index}>
                            <p>
                              <span
                                className={`text-red-600 pr-2
                                ]`}
                              >
                                •
                              </span>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mt-5">Story</h3>
                      <p className="mt-4">{persona["user_story"]}</p>
                    </div>
                    <div>
                      <h3 className="mt-7 font-semibold">PROBLEM STATEMENT</h3>
                      <p className="mt-3">
                        {persona["user_problem_statement"]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Wireframes */}
        <WireFrames projectData={projectData} />

        {/* Prototypes */}
        <Prototype
          prototype_type="Lo-Fi"
          prototype_summary={
            projectData["case_study"]["prototypes"]["lo_fi_prototype"][
              "summary"
            ]
          }
          prototype_image_link={
            projectData["case_study"]["prototypes"]["lo_fi_prototype"][
              "prototype_image_link"
            ]
          }
        />
        <Prototype
          prototype_type="Hi-Fi"
          prototype_summary={
            projectData["case_study"]["prototypes"]["hi_fi_prototype"][
              "summary"
            ]
          }
          prototype_image_link={
            projectData["case_study"]["prototypes"]["hi_fi_prototype"][
              "prototype_image_link"
            ]
          }
        />

        {/* Mockups */}
        <div>
          <CaseStudyUtils.CaseStudySectionTitle title="Mockups" />
          <div className="max-w-5xl mx-auto p-5">
            {projectData["case_study"]["mockups"].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10"
              >
                {item[Object.keys(item)[0]].map((item2, index2) => (
                  <div key={index2}>
                    {/* Check for web mockup category */}
                    {Object.keys(item)[0].includes("web") ? (
                      <Image
                        src="/images/miscellaneous/mockups_browser_top_pannel.svg"
                        alt="mockup"
                        width={1000}
                        height={1000}
                      />
                    ) : (
                      ""
                    )}
                    <Image
                      src={item2}
                      width={1000}
                      height={1000}
                      alt={`mockup image ${index2}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Takeaways */}
        <div>
          <CaseStudyUtils.CaseStudySectionTitle title="Takeaways" />
          <p className="max-w-2xl mx-auto">
            {projectData["case_study"]["take_aways"]}
          </p>
        </div>
      </div>
    </div>
  );
}
