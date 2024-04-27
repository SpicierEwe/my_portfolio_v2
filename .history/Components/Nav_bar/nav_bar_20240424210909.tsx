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
        <div>{getIcon("menu")}</div>
        {/* desktop */}
        <ul className="flex">
          {navItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
