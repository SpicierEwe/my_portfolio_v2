export default function CompetativeAnalysis(props) {
  const { projectData } = props;

  const initialCompetitors =
    projectData["case_study"]["competative_analysis"]["table_data"][
      "competitors"
    ];

  const competitors = ["Services", ...initialCompetitors];

  return (
    <div>
      <div>
        <h2 className="text-xl">Competative Analysis</h2>
        <p
          dangerouslySetInnerHTML={{
            __html:
              projectData["case_study"]["competative_analysis"]["overview"],
          }}
        ></p>
        <table>
          {/* Table header */}
          <tr>
            {competitors.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>

          {projectData["case_study"]["competative_analysis"]["table_data"][
            "analysis"
          ].map((item, index) => (
            <tr key={index}>
              {competitors.map((competitor, index2) => (
                <td key={index2}>
                  {index2 === 0 ? (
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
