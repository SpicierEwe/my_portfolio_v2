export default function CompetativeAnalysis(props) {
  const { projectData } = props;

  const initialCompetitors =
    projectData["case_study"]["competative_analysis"]["table_data"][
      "competitors"
    ];

  const competitors = ["Services", ...initialCompetitors];

  return (
    <div>
      <div className="mt-14 md:mt-28">
        <div className="pl-5">
          <h2 className="text-xl font-semibold text-center">
            Competative Analysis
          </h2>
          <p
            className="mt-11 md:mt-14 pr-3 mx-auto max-w-screen-md md:leading-relaxed md:text-lg"
            dangerouslySetInnerHTML={{
              __html:
                projectData["case_study"]["competative_analysis"]["overview"],
            }}
          ></p>
        </div>

        <div className="overflow-x-scroll mx-auto md:overflow-x-hidden  shadow border mt-11 pl-5 ml-5 mb-9 max-w-min">
          <table className="">
            {/* Table header */}
            <tr>
              {competitors.map((item, index) => (
                <th key={index} className="p-5">
                  {item}
                </th>
              ))}
            </tr>

            {projectData["case_study"]["competative_analysis"]["table_data"][
              "analysis"
            ].map((item, index) => (
              <tr key={index} className="pt-5">
                {competitors.map((competitor, index2) => (
                  <td key={index2} className="py-2">
                    {/* competetor names */}
                    {index2 === 0 ? (
                      <span>
                        {Object.keys(item).toString().replaceAll("_", " ")}
                      </span>
                    ) : (
                      <div
                        className="w-5 h-5 rounded-full mx-auto"
                        style={{
                          border: `2px solid ${projectData["case_study"]["accent_color"]}`,
                          backgroundColor:
                            item[Object.keys(item)][
                              index2 - 1
                            ].toLowerCase() === "yes"
                              ? projectData["case_study"]["accent_color"]
                              : "white",
                        }}
                      ></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
