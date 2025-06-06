export function SectionTitle(props: any) {
  const {} = props.title;

  return (
    <header className="flex flex-col items-center pt-14 md:pt-24">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">
        Discover my Projects
      </h2>
      <p className="text-center text-sm mt-2.5 text-gray-500">
        Journey through my projects, Unveiling Innovation and Creativity.
      </p>
    </header>
  );
}
