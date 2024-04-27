import { React, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { MdStars } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import { BsPersonFill, BsListCheck } from "react-icons/bs";
import CompetativeAnalysis from "./competative_analysis/competative_analysis";
import WireFrames from "./wire_frames/wire_frames";
import Prototype from "./prototypes/prototype";
import Head from "next/head";

export default function CaseStudyComponent(props) {
  const { projectData } = props;

  return (
    <div>
      <Head>
        <title>{projectData["projectName"]}</title>
      </Head>
      {/* Hero image */}
      <Image
        src={projectData["case_study"]["image_links"]["hero_image"]}
        width={1000}
        height={1000}
        alt="hero image"
        priority={true}
      />
      <div className="m-5">
        <div className="flex flex-col gap-3">
          <div>
            <h2>PROJECT:</h2>
            <p>{projectData["projectName"]}</p>
          </div>
          <div>
            <h2>ROLE:</h2>
            <p>{projectData["case_study"]["role"]}</p>
          </div>
          <div>
            <h2>DURATION:</h2>
            <p>{projectData["case_study"]["project_duration"]}</p>
          </div>
        </div>

        <h2 className="mt-11 text-center font-semibold text-xl">
          Project Overview
        </h2>
        <div className="mt-14 flex">
          <h3 className="uppercase font-semibold">The Product</h3>
          <p className="mt-3">
            {projectData["case_study"]["project_overview"]["the_product"]}
          </p>
          <Image
            src={projectData["case_study"]["image_links"]["product_image"]}
            width={1000}
            height={1000}
            alt="product image"
          />
        </div>

        <div>
          <MdStars size={45} />
          <h3>The Goal</h3>
          <p>{projectData["case_study"]["project_overview"]["the_goal"]}</p>

          <MdReportProblem size={45} />
          <h3>The Problem</h3>
          {projectData["case_study"]["project_overview"]["the_problem"].map(
            (item, index) => (
              <div key={index}>
                <p>{index + 1})</p>
                <p>{item.toString()}</p>
              </div>
            )
          )}

          <BsPersonFill size={45} />
          <h3>My Role</h3>
          <p>{projectData["case_study"]["project_overview"]["my_role"]}</p>

          <BsListCheck size={45} />
          <h3>Responsibilities</h3>
          <p>
            {projectData["case_study"]["project_overview"]["responsibilities"]}
          </p>
        </div>

        {/* Competative analysis */}
        <CompetativeAnalysis projectData={projectData} />

        {/* User research */}
        <div>
          <h2>User Research</h2>
          <div>
            <h3>Summary</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: projectData["case_study"]["user_research"]["summary"],
              }}
            />
          </div>
          <div>
            <h3>Pain Points</h3>
            {projectData["case_study"]["user_research"]["pain_points"].map(
              (item, index) => (
                <div key={index}>
                  {Object.keys(item).map((key, index2) => (
                    <div key={index2}>
                      <p>{index2 + 1}</p>
                      <h4>{key}</h4>
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

        {/* User personas */}
        <div>
          <h2>Meet the Users</h2>
          <div>
            {projectData["case_study"]["user_research"]["personas"].map(
              (persona, index) => (
                <div key={index}>
                  <div>
                    <div
                      style={{
                        backgroundImage: `url(${persona["user_info"]["user_image"]})`,
                        border: `0.5em solid ${projectData["case_study"]["accent_color"]}`,
                      }}
                    />
                    <div>
                      <h3>
                        {Object.keys(persona["user_info"]).map(
                          (item, index2) => (
                            <div key={index2}>
                              <div>
                                {item !== "user_image" &&
                                  `${item
                                    .replace("user_", "")
                                    .charAt(0)
                                    .toUpperCase()}${item
                                    .replace("user_", "")
                                    .slice(1)}:`}
                              </div>
                              <p>
                                {item !== "user_image" &&
                                  persona["user_info"][item]}
                              </p>
                            </div>
                          )
                        )}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>“</span>
                      {persona["user_dream"]}
                      <span>”</span>
                    </p>
                    <div>
                      <h3>Goals</h3>
                      {persona["user_goals"].map((item, index) => (
                        <div key={index}>
                          <p>• {item}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3>Frustrations</h3>
                      {persona["user_frustrations"].map((item, index) => (
                        <div key={index}>
                          <p>• {item}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3>Story</h3>
                      <p>{persona["user_story"]}</p>
                    </div>
                    <div>
                      <h3>PROBLEM STATEMENT</h3>
                      <p>{persona["user_problem_statement"]}</p>
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
          <h2>Mockups</h2>
          <div>
            {projectData["case_study"]["mockups"].map((item, index) => (
              <div key={index}>
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
          <h3>Takeaways</h3>
          <p>{projectData["case_study"]["take_aways"]}</p>
        </div>
      </div>
    </div>
  );
}
