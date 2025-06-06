export function SectionTitle(props: any) {
  const { title, subtitle, titleClassName, child } = props;

  return (
    <header className={`flex flex-col items-center pt-14 md:pt-24`}>
      <h2
        className={`text-center text-2xl md:text-3xl lg:text-5xl font-bold ${titleClassName}`}
      >
        {title}
      </h2>
      <p className="text-center text-sm md:text-lg mt-3 md:mt-5 text-gray-500">
        {subtitle}
      </p>
      {child}
    </header>
  );
}
