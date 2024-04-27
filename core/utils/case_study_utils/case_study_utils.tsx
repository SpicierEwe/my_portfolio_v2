export default class CaseStudyUtils {
  //
  static CaseStudySectionTitle(props: any) {
    const { title } = props;

    return (
      <h3>
        {
          <h2
            className={`text-center font-semibold text-3xl md:text-4xl mt-40 mb-28`}
          >
            {title}
          </h2>
        }
      </h3>
    );
  } //
  static CaseStudySubSectionTitle(props: any) {
    const { title } = props;

    return (
      <h3 className={`font-semibold text-xl mt-5 leading-loose`}>{title}</h3>
    );
  }
}
