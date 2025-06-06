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
      <nav className="flex justify-between items-center px-5 py-3 ">
        <div>Logo</div>
        {/* mobile */}
        <div className="xs:block sm:hidden rounded-full shadow p-2 bg-white">
          {getIcon("menu")}
        </div>
        {/* desktop */}
        <ul className="hidden sm:flex gap-5 py-3 px-6">
          {navItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
