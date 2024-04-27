import { React, useContext, useEffect, useState } from "react";
import styles from "./case_study.module.css";
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
    <div className="">
      <Head>
        <title>{projectData["projectName"]}</title>
      </Head>
      <div className={styles.aa}>
        {/* hero image */}
        <Image
          className={styles.hero_image}
          src={projectData["case_study"]["image_links"]["hero_image"]}
          width={1000}
          height={1000}
          alt="hero image"
          priority={true}
        ></Image>
        <div className="">
          <div className="">
            <div
              className={
                styles.desktop_hero_image_overlay_info_container_sub_flex
              }
            >
              <h2 className="">PROJECT : </h2>
              <p>{projectData["projectName"]}</p>
            </div>
            <div
              className={
                styles.desktop_hero_image_overlay_info_container_sub_flex
              }
            >
              <h2 className="">ROLE : </h2>
              <p>{projectData["case_study"]["role"]}</p>
            </div>
            <div className="">
              <h2 className={styles.hero_info_title}>DURATION : </h2>
              <p>{projectData["case_study"]["project_duration"]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* project overviiew */}
        <h2 className={styles.section_heading}>Project Overview</h2>

        <div className={styles.the_product_flex}>
          {/* the product */}
          <div className={styles.product_info}>
            <div className={styles.sub_heading}>The Product</div>
            <div className={styles.paragraph_style}>
              {projectData["case_study"]["project_overview"]["the_product"]}
            </div>
          </div>
          {/* product_image */}
          <Image
            className={styles.product_image}
            src={projectData["case_study"]["image_links"]["product_image"]}
            width={1000}
            height={1000}
            alt="product image"
          ></Image>
        </div>
      </div>

      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.simple_flex}>
            {/* the goal */}
            <div>
              <MdStars size={45} className={styles.icon}></MdStars>
              <div className={styles.sub_heading}>The Goal</div>
              <div className={styles.goal_style}>
                {projectData["case_study"]["project_overview"]["the_goal"]}
              </div>
            </div>
            {/* the problem */}
            <div>
              <MdReportProblem className={styles.icon}></MdReportProblem>
              <div className={styles.sub_heading}>The Problem</div>
              <div>
                {projectData["case_study"]["project_overview"][
                  "the_problem"
                ].map((item, index) => {
                  console.log(item);
                  return (
                    <div key={index} className={styles.problems_flex}>
                      <p className={styles.count_style}>{index + 1})</p>
                      <p className={styles.statement_style}>
                        {item.toString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* my role */}
            <div>
              <BsPersonFill size={45} className={styles.icon}></BsPersonFill>
              <div className={styles.sub_heading}>My Role</div>
              <div className={styles.goal_style}>
                {projectData["case_study"]["project_overview"]["my_role"]}
              </div>
            </div>

            {/* my responsibilities */}
            <div>
              <BsListCheck size={45} className={styles.icon}></BsListCheck>
              <div className={styles.sub_heading}>Responsibilities</div>
              <div className={styles.goal_style}>
                {
                  projectData["case_study"]["project_overview"][
                    "responsibilities"
                  ]
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Competative analysis */}
      <div className={styles.container}>
        <CompetativeAnalysis projectData={projectData}></CompetativeAnalysis>
      </div>

      <div className={styles.container}>
        {/* user research : summary */}
        <div className={styles.section_padding}>
          <div className={`${styles.section_heading}`}>User Research</div>
          <div className={styles.summary_container}>
            <div className={`${styles.sub_heading} `}>Summary</div>
            <p
              className={` ${styles.summary_style}`}
              dangerouslySetInnerHTML={{
                __html: projectData["case_study"]["user_research"]["summary"],
              }}
            ></p>
          </div>
        </div>

        {/* user research : pain points */}
        <div className={styles.section_padding}>
          <div>
            <div className={`${styles.sub_heading} `}>Pain Points</div>
            <div>
              {projectData["case_study"]["user_research"]["pain_points"].map(
                (item, index) => {
                  return (
                    <div key={index}>
                      <div className={styles.pain_points_grid}>
                        {Object.keys(item).map((key, index2) => {
                          return (
                            <div
                              key={index2}
                              className={styles.pain_point_item}
                            >
                              <div className={styles.pain_points_count}>
                                {index2 + 1}
                              </div>
                              <div className={styles.sub_heading}>{key}</div>
                              <div>
                                {item[key].map((item2, index3) => {
                                  return (
                                    <p
                                      key={index3}
                                      className={styles.statement_style}
                                    >
                                      {item2}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* user research : user personas */}
        <div className={`${styles.section_padding} ${styles.bg}`}>
          <div className={styles.container}>
            <div className={styles.personas_container}>
              <div
                className={`${styles.section_heading}`}
                style={{ textAlign: "center", fontStyle: "italic" }}
              >
                Meet the Users
              </div>

              {/* personas are here  */}

              <div className={styles.personas_flex}>
                {projectData["case_study"]["user_research"]["personas"].map(
                  (persona, index) => {
                    return (
                      <div key={index} className={styles.persona_border}>
                        <div className={styles.single_persona_flex}>
                          <div
                            className={styles.persona_image_holder}
                            style={{
                              backgroundImage: `url(${persona["user_info"]["user_image"]}`,
                              border: `0.5em solid ${projectData["case_study"]["accent_color"]}`,
                            }}
                          ></div>

                          {/* this is the info container flexed by titles and info values */}

                          <div>
                            <h2>
                              {Object.keys(persona["user_info"]).map(
                                (item, index2) => {
                                  return (
                                    <div
                                      key={index2}
                                      className={styles.persona_info_flex}
                                    >
                                      <div
                                        className={styles.persona_info_title}
                                      >
                                        {item != "user_image" &&
                                          item
                                            .replace("user_", "")[0]
                                            .toUpperCase() +
                                            item.replace("user_", "").slice(1) +
                                            ":"}
                                      </div>
                                      <p>
                                        {item != "user_image" &&
                                          persona["user_info"][item]}
                                      </p>
                                    </div>
                                  );
                                }
                              )}
                            </h2>
                          </div>
                        </div>
                        <div className={styles.user_interests_container}>
                          {/* user dream */}
                          <p
                            className={`${styles.statement_style} ${styles.user_dream_style}`}
                          >
                            <span className={styles.quote}>“</span>
                            {persona["user_dream"]}
                            <span className={styles.quote}>”</span>
                          </p>
                          {/* USER INTERESTS */}
                          <div>
                            <h2 className={styles.user_interests_heading}>
                              Goals
                            </h2>
                            <p>
                              {persona["user_goals"].map((item, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={styles.user_goals_flex}
                                  >
                                    <div className={styles.dot}></div>
                                    <p>{item}</p>
                                  </div>
                                );
                              })}
                            </p>
                          </div>
                          {/* USER FRUSTRATIONS */}
                          <div>
                            <h2 className={styles.user_interests_heading}>
                              Frustrations
                            </h2>
                            <p>
                              {persona["user_frustrations"].map(
                                (item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className={styles.user_goals_flex}
                                    >
                                      <div
                                        className={styles.dot}
                                        style={{ backgroundColor: "red" }}
                                      ></div>
                                      <p>{item}</p>
                                    </div>
                                  );
                                }
                              )}
                            </p>
                          </div>
                          {/* USER STORY */}
                          <div>
                            <h2 className={styles.user_story_heading}>Story</h2>
                            <p className={styles.user_story}>
                              {persona["user_story"]}
                            </p>
                          </div>
                          {/* PROBLEM STATEMENT */}
                          <div>
                            <h2
                              className={styles.user_story_heading}
                              style={{ color: "red" }}
                            >
                              PROBLEM STATEMENT
                            </h2>
                            <p className={styles.user_story}>
                              {persona["user_problem_statement"]}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        {/* wire frames */}
        <div>
          <WireFrames projectData={projectData}></WireFrames>
        </div>
        {/* Lofi prototype */}
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
        ></Prototype>
        {/* Mock ups*/}
        {/* <div className={`${styles.container}`}>
            <div className={styles.section_heading}>Mockups</div>
            <div className={styles.mockup_image_container}>
              {data["case_study"]["mockups"]["phone_image_link"] != null &&
                data["case_study"]["mockups"]["phone_image_link"].map(
                  (item, index) => {
                    return (
                      <Image
                        key={index}
                        className={styles.mockup_image}
                        src={item}
                        width={1000}
                        height={1000}
                        alt={"mockup image" + index}
                      ></Image>
                    );
                  }
                )}
            </div> */}
        <div className={`${styles.container}`}>
          {/* HERE ARE THE MOCKUPS DISPLAYED */}
          <div className={styles.section_heading}>Mockups</div>
          <div>
            {projectData["case_study"]["mockups"].map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    Object.keys(item)[0].includes("web")
                      ? styles.web_mockup_image_container
                      : styles.mockup_image_container
                  }
                >
                  {item[Object.keys(item)[0]].map((item2, index) => {
                    return (
                      <div key={index}>
                        {/* IN THIS WE ARE CHECKING FOR THE MOCKUP CATEGORY includes  WEB THEN DISPLAYING A TOP BROWSER PANNEL OVER THE IMAGE */}
                        {Object.keys(item)[0].includes("web") ? (
                          <Image
                            className={styles.mockup_image}
                            src={
                              "/images/miscellaneous/mockups_browser_top_pannel.svg"
                            }
                            alt="mockup"
                            width={1000}
                            height={1000}
                          ></Image>
                        ) : (
                          ""
                        )}
                        <Image
                          key={index}
                          className={styles.mockup_image}
                          src={item2}
                          width={1000}
                          height={1000}
                          alt={"mockup image" + index}
                        ></Image>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hi-Fi prototype */}
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
        ></Prototype>

        <div className={styles.container}>
          <div
            className={`${styles.summary_container} ${styles.take_away_container}`}
          >
            <div
              className={`${styles.sub_heading} ${styles.take_away_heading}`}
            >
              Takeaways
            </div>
            <div className={` ${styles.summary_style}`}>
              {projectData["case_study"]["take_aways"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
