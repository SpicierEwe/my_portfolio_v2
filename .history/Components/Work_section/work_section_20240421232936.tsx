export default function WorkSection() {
  const navItems: string[] = ["All", "Web", "Mobile", "UI/UX", "Designs"];
  return (
    <section className="">
      {/* header */}
      <header className="flex flex-col items-center pt-5">
        <h2 className="text-center text-2xl">Discover my Projects</h2>
        <p className="text-center text-sm mt-2 text-gray-500">
          Journey through my projects, Unveiling Innovation and Creativity.
        </p>
      </header>
      <nav>
        <ul className="flex justify-center mt-5">
          {navItems.map((item, index) => (
            <li className="mx-2">
              <a href="#" className="text-blue-500">
                All
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
