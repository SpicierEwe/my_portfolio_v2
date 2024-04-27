export default function CompetativeAnalysis(props) {
  const { projectData } = props;

  const initialCompetitors =
    projectData["case_study"]["competative_analysis"]["table_data"][
      "competitors"
    ];

  const competitors = ["Services", ...initialCompetitors];

  return (
    <div>
      <div className="p-5 mt-14">
        <h2 className="text-xl font-semibold text-center">
          Competative Analysis
        </h2>
        <p
          className="mt-11"
          dangerouslySetInnerHTML={{
            __html:
              projectData["case_study"]["competative_analysis"]["overview"],
          }}
        ></p>
        <table className="overflow-x-scroll mt-11">
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
                <td key={index2} className="rounded-full w-min">
                  {index2 === 1 ? (
                    <span>
                      {Object.keys(item).toString().replaceAll("_", " ")}
                    </span>
                  ) : (
                    <div
                      style={{
                        border: `2px solid ${projectData["case_study"]["accent_color"]}`,
                        backgroundColor:
                          item[Object.keys(item)][index2 - 1].toLowerCase() ===
                          "yes"
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
  );
}
