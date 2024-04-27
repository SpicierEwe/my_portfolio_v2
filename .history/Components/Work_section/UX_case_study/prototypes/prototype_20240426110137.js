import CaseStudyUtils from "@/Core/utils/case_study_utils/case_study_utils";
import Image from "next/image";

export default function Prototype(props) {
  return (
    <div>
      <div>
        <div>
          <CaseStudyUtils.CaseStudySectionTitle
            title={`${props.prototype_type} Prototype`}
          />
          <h2></h2>

          <div className="m-5">
            <CaseStudyUtils.CaseStudySubSectionTitle title={"Summary"} />
            <p
              dangerouslySetInnerHTML={{
                __html: props.prototype_summary,
              }}
            />
          </div>

          {props.prototype_image_link.map((image_link, index) => (
            <div key={index}>
              <Image
                src={image_link}
                alt="prototype"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
