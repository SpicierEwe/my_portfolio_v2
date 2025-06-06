export function SectionTitle(props: any) {
  const { title, subtitle, className: string } = props;

  return (
    <header className="flex flex-col items-center pt-14 md:pt-24">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">{title}</h2>
      <p className="text-center text-sm mt-2.5 text-gray-500">{subtitle}</p>
    </header>
  );
}
