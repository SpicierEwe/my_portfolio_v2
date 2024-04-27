import { getIcon } from "@/core/utils/utils";
import Link from "next/link";

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
        <ul className="hidden sm:flex gap-7 py-3 px-6">
          {navItems.map((item, index) => (
            <Link key={index}>
              <li className="cursor-pointer hover:bg-brand-color py-2 px-5 rounded-full hover:text-white  transition-colors duration-200 ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
