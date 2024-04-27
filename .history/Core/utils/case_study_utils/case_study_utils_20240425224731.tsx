export default class CaseStudyUtils {
  //
  static CaseStudySectionTitle(props: any) {
    const { title } = props;

    return (
      <h3>
        {
          <h2
            className={`mt-16 text-center font-semibold text-3xl md:text-4xl md:mt-32 mb-11 md:mb-20`}
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
