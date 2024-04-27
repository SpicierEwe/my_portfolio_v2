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
      <div className="max-w-5xl mx-auto">
        <div className="pt-5 mt-11">
          <CaseStudyUtils.CaseStudySectionTitle title="Wire Frames" />

          <div className="grid grid-cols-1 md:grid-cols-2 flex-col-reverse">
            <div className="m-5">
              <CaseStudyUtils.CaseStudySubSectionTitle title="P&P wireframes" />

              <p
                className="mt-3 md:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html:
                    projectData["case_study"]["wire_frames"][
                      "paper_wireframes"
                    ]["summary"],
                }}
              />
            </div>
            <Image
              className="mt-7 md:mt-16"
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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mt-14 mx-5 md:mt-24">
              <CaseStudyUtils.CaseStudySubSectionTitle title="Digital wireframes" />
              <p
                className="mt-5 md:text-lg"
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
              className="mt-11"
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
