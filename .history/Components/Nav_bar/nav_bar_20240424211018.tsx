import { getIcon } from "@/core/utils/utils";

export default function NavBar(props: any) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div>
      <nav className="flex justify-between items-center">
        <div>Logo</div>
        {/* mobile */}
        <div className="sm:block md:hidden">{getIcon("menu")}</div>
        {/* desktop */}
        <ul className="hidden flex  md:block">
          {navItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
