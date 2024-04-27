export default class CaseStudyUtils {
  static CaseStudySectionTitle(props) {
    const { title } = props;

    return (
      <h3>
        {
          <h2 className="mt-11 text-center font-semibold text-xl md:mt-32 md:text-2xl">
            {title}
          </h2>
        }
      </h3>
    );
  }
}
