"use client";

import { getIcon } from "../../core/utils/utils";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar(props) {
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
      {/* if  route is home make it float */}
      <div className={`${isHome ? "absolute z-20 w-full top-0" : ""}`}>
        <nav className="flex justify-center items-center p-5">
          {/* <Link href="/">
            <div>Logo</div>
          </Link> */}

          {/* mobile */}
          {/* <div className="xs:block sm:hidden rounded-full shadow p-2 bg-white">
            {getIcon("menu")}
          </div> */}
          {/* desktop */}
          <ul className="flex justify-center md:px-6">
            {navItems.map((item, index) => (
              // <Link key={index} href={item.link}>
              <Link key={index} href="#">
                <li className="cursor-pointer hover:bg-brand-color py-2 px-4 font-semibold rounded-full hover:text-white  transition-colors duration-200 ease-in-out">
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
