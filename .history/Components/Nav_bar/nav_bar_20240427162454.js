"use client";

import { getIcon } from "../../core/utils/utils";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar(props) {
  const router = useRouter();
  const path = usePathname();

  const isHome = path === "/";

  function onMenuClick() {}

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/#work",
    },
    {
      name: "About",
      link: "/about",
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <section>
      {/* if  route is home make it float */}
      <div className={`${isHome ? "absolute z-20 w-full top-0" : ""}`}>
        <nav className="flex justify-between items-center px-5 py-3  ">
          <Link href="/">
            <div>Logo</div>
          </Link>

          {/* mobile */}
          <div className="xs:block sm:hidden rounded-full shadow p-2 bg-white">
            {getIcon("menu")}
          </div>
          {/* desktop */}
          <ul className="hidden sm:flex gap-7 py-3 px-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li className="cursor-pointer hover:bg-brand-color py-2 px-5 rounded-full hover:text-white  transition-colors duration-200 ease-in-out">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="absolute h-screen w-screen bg-white z-30 p-5 pt-11">
        <div>
          <div className="absolute right-0 h-14 w-14 text-center flex justify-center rounded-full bg-black text-white items-center">
            <p>X</p>
          </div>
          <h2 className="font-bold text-5xl">Menu</h2>
          <ul className="flex flex-col gap-5 mt-7">
            {navItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li
                  onClick={onMenuClick}
                  className="cursor-pointer hover:bg-brand-color text-xl py-2 rounded-full hover:text-white  transition-colors duration-200 ease-in-out"
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {props.children}
    </section>
  );
}
