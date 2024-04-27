import styles from "./competative_analysis.module.css";

export default function CompetativeAnalysis(props) {
  const { projectData } = props;

  const intial_competitors =
    projectData["case_study"]["competative_analysis"]["table_data"][
      "competitors"
    ];

  const competitors = ["Services", ...intial_competitors];

  return (
    <div>
      <div className={styles.section_padding}>
        <div className={`${styles.section_heading}`}>Competative Analysis</div>
        <div className={styles.summary_container}>
          <p
            className={` ${styles.overview_style}`}
            dangerouslySetInnerHTML={{
              __html:
                projectData["case_study"]["competative_analysis"]["overview"],
            }}
          ></p>
        </div>
        <div className={styles.table_container}>
          <table className={styles.table}>
            {/* here is the th (  table header )*/}
            <tr>
              {competitors.map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>

            {projectData["case_study"]["competative_analysis"]["table_data"][
              "analysis"
            ].map((item, index) => {
              return (
                <tr key={index}>
                  {/* this is just to get the updated length without hardcoding*/}
                  {competitors.map((competitor, index) => {
                    return (
                      <td key={index} className={`${styles.captalize}`}>
                        <div className={styles.services}>
                          {index == 0 &&
                            Object.keys(item)
                              .toString()
                              .replaceAll("_", " ")}{" "}
                        </div>
                        {index !== 0 && (
                          <div
                            className={styles.dot}
                            style={{
                              border: `2px solid ${projectData["case_study"]["accent_color"]}`,
                              backgroundColor:
                                item[Object.keys(item)][
                                  index - 1
                                ].toLowerCase() == "yes"
                                  ? projectData["case_study"]["accent_color"]
                                  : "white",
                            }}
                          ></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
