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
      <div className>
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
              <h2 className>DURATION : </h2>
              <p>{projectData["case_study"]["project_duration"]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className>
        {/* project overviiew */}
        <h2 className>Project Overview</h2>

        <div className>
          {/* the product */}
          <div className>
            <div className>The Product</div>
            <div className>
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

      <div className>
        <div className>
          <div className>
            {/* the goal */}
            <div>
              <MdStars size={45} className></MdStars>
              <div className>The Goal</div>
              <div className>
                {projectData["case_study"]["project_overview"]["the_goal"]}
              </div>
            </div>
            {/* the problem */}
            <div>
              <MdReportProblem className></MdReportProblem>
              <div className>The Problem</div>
              <div>
                {projectData["case_study"]["project_overview"][
                  "the_problem"
                ].map((item, index) => {
                  console.log(item);
                  return (
                    <div key={index} className>
                      <p className>{index + 1})</p>
                      <p className>
                        {item.toString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* my role */}
            <div>
              <BsPersonFill size={45} className></BsPersonFill>
              <div className>My Role</div>
              <div className>
                {projectData["case_study"]["project_overview"]["my_role"]}
              </div>
            </div>

            {/* my responsibilities */}
            <div>
              <BsListCheck size={45} className></BsListCheck>
              <div className>Responsibilities</div>
              <div className>
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
      <div className>
        <CompetativeAnalysis></CompetativeAnalysis>
      </div>

      <div className>
        {/* user research : summary */}
        <div className>
          <div className>User Research</div>
          <div className>
            <div className={`${>Summary</div>
            <p
              className={` ${styles.summary_style}`}
              dangerouslySetInnerHTML={{
                __html: projectData["case_study"]["user_research"]["summary"],
              }}
            ></p>
          </div>
        </div>

        {/* user research : pain points */}
        <div className>
          <div>
            <div className={`${>Pain Points</div>
            <div>
              {projectData["case_study"]["user_research"]["pain_points"].map(
                (item, index) => {
                  return (
                    <div>
                      <div className>
                        {Object.keys(item).map((key, index2) => {
                          return (
                            <div
                              key={index2}
                              className={styles.pain_point_item}
                            >
                              <div className>
                                {index2 + 1}
                              </div>
                              <div className>{key}</div>
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
        <div className={`${styles.section_padding} >
          <div className>
            <div className>
              <div
                className={`${styles.section_heading}`}
                style={{ textAlign: "center", fontStyle: "italic" }}
              >
                Meet the Users
              </div>

              {/* personas are here  */}

              <div className>
                {projectData["case_study"]["user_research"]["personas"].map(
                  (persona, index) => {
                    return (
                      <div key={index} className>
                        <div className>
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
                        <div className>
                          {/* user dream */}
                          <p
                            className={`${styles.statement_style} ${styles.user_dream_style}`}
                          >
                            <span className>“</span>
                            {persona["user_dream"]}
                            <span className>”</span>
                          </p>
                          {/* USER INTERESTS */}
                          <div>
                            <h2 className>
                              Goals
                            </h2>
                            <p>
                              {persona["user_goals"].map((item, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={styles.user_goals_flex}
                                  >
                                    <div className></div>
                                    <p>{item}</p>
                                  </div>
                                );
                              })}
                            </p>
                          </div>
                          {/* USER FRUSTRATIONS */}
                          <div>
                            <h2 className>
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
                            <h2 className>Story</h2>
                            <p className>
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
                            <p className>
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
          <WireFrames></WireFrames>
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
        {/* <div className>
            <div className>Mockups</div>
            <div className>
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
        <div className>
          {/* HERE ARE THE MOCKUPS DISPLAYED */}
          <div className>Mockups</div>
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
                      <div>
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

        <div className>
          <div
            className={`${styles.summary_container} ${styles.take_away_container}`}
          >
            <div
              className={`${styles.sub_heading} ${styles.take_away_heading}`}
            >
              Takeaways
            </div>
            <div className={` >
              {projectData["case_study"]["take_aways"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
