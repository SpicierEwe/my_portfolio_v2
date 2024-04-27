"use client";

import { getIcon } from "@/core/utils/utils";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar(props: any) {
  const router = useRouter();
  const path = usePathname();

  const isHome = path === "/";

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
      <div className={`${"bg-red-100 absolute w-screen top-0"}`}>
        <nav className="flex justify-between items-center px-5 py-3 sm:py-0 ">
          <div>Logo {path}</div>
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
      {props.children}
    </section>
  );
}

// returns classes
function _navBarRendering(): string {
  return "";
}
