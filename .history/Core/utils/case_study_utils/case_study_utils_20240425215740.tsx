export default class CaseStudyUtils {
  //
  static CaseStudySectionTitle(props: any) {
    const { title } = props;

    return (
      <h3>
        {
          <h2
            className={`mt-11 text-center font-semibold text-3xl md:mt-32 md:text-3xl`}
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
      <h3 className={`font-semibold text-2xl mt-5 leading-loose`}>{title}</h3>
    );
  }
}
