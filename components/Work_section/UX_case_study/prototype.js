import CaseStudyUtils from "@/Core/utils/case_study_utils/case_study_utils";
import Image from "next/image";

export default function Prototype(props) {
  return (
    <div className="max-w-4xl mx-auto md:text-lg">
      <div>
        <div>
          <CaseStudyUtils.CaseStudySectionTitle
            title={`${props.prototype_type} Prototype`}
          />

          <div className="m-5">
            <CaseStudyUtils.CaseStudySubSectionTitle title={"Summary"} />
            <p
              className="mt-3"
              dangerouslySetInnerHTML={{
                __html: props.prototype_summary,
              }}
            />
          </div>

          {props.prototype_image_link.map((image_link, index) => (
            <div key={index} className="mt-9">
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
