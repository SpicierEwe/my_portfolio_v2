export default class CaseStudyUtils {
  //
  static CaseStudySectionTitle(props: any) {
    const { title, className } = props;

    return (
      <h3>
        {
          <h2
            className={`mt-11 text-center font-semibold text-xl md:mt-32 md:text-3xl ${className}`}
          >
            {title}
          </h2>
        }
      </h3>
    );
  } //
  static CaseStudySubSectionTitle(props: any) {
    const { title, className } = props;

    return (
      <h3 className={`font-semibold text-lg mt-5 leading-loose ${className}`}>
        {title}
      </h3>
    );
  }
}
