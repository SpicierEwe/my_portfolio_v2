import { React, useContext, useEffect, useState } from "react";
import Image from "next/image";
import DataContext from "../../../../../provider/provider";
import LoadingScreen from "../../../../loading_screen/loading_screen";
import styles from "./wire_frames.module.css";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi"; //arrow down

export default function WireFrames() {
  const dataCtx = useContext(DataContext);
  const data = dataCtx.db;
  const [is_loading, set_is_loading] = useState(true);

  const [
    current_digital_wireframe_index,
    set_current__digital_wireframe_index,
  ] = useState(0);

  useEffect(() => {
    if (data != null) {
      // console.log(data);
      set_is_loading(false);
    }
  }, [data]);

  if (!is_loading) {
    return (
      <div
        className={styles.bg}
        style={{ backgroundImage: `url("/images/grid.webp")` }}
      >
        <div className={styles.container}>
          <div className={styles.section_padding}>
            <h2 className={styles.section_heading}>Wire Frames</h2>

            <div className={styles.flex}>
              <div>
                <p className={styles.sub_heading}>P&P wireframes</p>
                <p
                  className={styles.summary_style}
                  dangerouslySetInnerHTML={{
                    __html:
                      data["case_study"]["wire_frames"]["paper_wireframes"][
                        "summary"
                      ],
                  }}
                ></p>
              </div>
              <Image
                className={styles.image_style}
                src={
                  data["case_study"]["wire_frames"]["paper_wireframes"][
                    "wireframes_image_link"
                  ]
                }
                alt="wireframes"
                width={1000}
                height={1000}
              ></Image>
            </div>
          </div>

          {/* spacer */}
          <div className={styles.sub_content_spaacer}></div>
          {/* DIGITAL WIRE FRAMES */}
          <div className={styles.section_padding}>
            <div className={styles.flex}>
              <div>
                <p className={styles.sub_heading}>Digital wireframes</p>
                {/* summary */}
                <p
                  className={styles.summary_style}
                  dangerouslySetInnerHTML={{
                    __html:
                      data["case_study"]["wire_frames"]["digital_wireframes"][
                        "summary"
                      ],
                  }}
                ></p>
              </div>
              {/* digital wireframes images*/}

              <Image
                className={styles.image_style}
                src={
                  data["case_study"]["wire_frames"]["digital_wireframes"][
                    "wireframes_image_link"
                  ][current_digital_wireframe_index]
                }
                alt="wireframes"
                width={1000}
                height={1000}
              ></Image>

              <div className={styles.image_navigator_contianer}>
                {/* digital wirereframe image navigator up */}
                <HiArrowNarrowUp
                  className={`${styles.navigators} ${styles.navigators_up}`}
                  onClick={() => {
                    if (current_digital_wireframe_index > 0) {
                      set_current__digital_wireframe_index(
                        current_digital_wireframe_index - 1
                      );
                    }
                  }}
                ></HiArrowNarrowUp>
                {data["case_study"]["wire_frames"]["digital_wireframes"][
                  "wireframes_image_link"
                ].map((image, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={`${styles.dot} ${
                          current_digital_wireframe_index == index
                            ? styles.selected_image_dot
                            : ""
                        }`}
                        onClick={() => digital_wireframes_on_click(index)}
                      ></div>
                    </div>
                  );
                })}
                {/* digital wirereframe image navigator down */}
                <HiArrowNarrowDown
                  className={`${styles.navigators} ${styles.navigators_down}`}
                  onClick={() => {
                    if (
                      (current_digital_wireframe_index == 0 ||
                        current_digital_wireframe_index > 0) &&
                      current_digital_wireframe_index <
                        data["case_study"]["wire_frames"]["digital_wireframes"][
                          "wireframes_image_link"
                        ].length -
                          1
                    ) {
                      set_current__digital_wireframe_index(
                        current_digital_wireframe_index + 1
                      );
                    }
                  }}
                ></HiArrowNarrowDown>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return LoadingScreen();
  }

  function digital_wireframes_on_click(index) {
    set_current__digital_wireframe_index(index);
  }
}
