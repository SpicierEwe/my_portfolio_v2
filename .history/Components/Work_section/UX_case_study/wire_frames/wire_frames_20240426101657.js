import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import CaseStudyUtils from "@/Core/utils/case_study_utils/case_study_utils";

export default function WireFrames(props) {
  const { projectData } = props;

  const [currentDigitalWireframeIndex, setCurrentDigitalWireframeIndex] =
    useState(0);

  return (
    <div
      style={{
        backgroundImage: 'url("/images/grid.webp")',
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="pt-5 mt-11">
          <CaseStudyUtils.CaseStudySectionTitle title="Wire Frames" />

          <div>
            <div className="m-5">
              <CaseStudyUtils.CaseStudySubSectionTitle title="P&P wireframes" />

              <p
                className="mt-3"
                dangerouslySetInnerHTML={{
                  __html:
                    projectData["case_study"]["wire_frames"][
                      "paper_wireframes"
                    ]["summary"],
                }}
              />
            </div>
            <Image
              className="mt-7"
              src={
                projectData["case_study"]["wire_frames"]["paper_wireframes"][
                  "wireframes_image_link"
                ]
              }
              alt="wireframes"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Digital wireframes section */}
        <div>
          <div>
            <div className="mt-11">
              <CaseStudyUtils.CaseStudySubSectionTitle title="Digital wireframes" />
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    projectData["case_study"]["wire_frames"][
                      "digital_wireframes"
                    ]["summary"],
                }}
              />
            </div>

            {/* Digital wireframes images */}
            <Image
              src={
                projectData["case_study"]["wire_frames"]["digital_wireframes"][
                  "wireframes_image_link"
                ][currentDigitalWireframeIndex]
              }
              alt="wireframes"
              width={1000}
              height={1000}
            />

            <div>
              {/* Up arrow */}
              <HiArrowNarrowUp
                onClick={() => {
                  if (currentDigitalWireframeIndex > 0) {
                    setCurrentDigitalWireframeIndex(
                      currentDigitalWireframeIndex - 1
                    );
                  }
                }}
              />

              {/* Dot indicators */}
              {projectData["case_study"]["wire_frames"]["digital_wireframes"][
                "wireframes_image_link"
              ].map((image, index) => (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    margin: "5px",
                    backgroundColor:
                      currentDigitalWireframeIndex === index
                        ? "orange"
                        : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => setCurrentDigitalWireframeIndex(index)}
                />
              ))}

              {/* Down arrow */}
              <HiArrowNarrowDown
                onClick={() => {
                  if (
                    currentDigitalWireframeIndex <
                    projectData["case_study"]["wire_frames"][
                      "digital_wireframes"
                    ]["wireframes_image_link"].length -
                      1
                  ) {
                    setCurrentDigitalWireframeIndex(
                      currentDigitalWireframeIndex + 1
                    );
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
