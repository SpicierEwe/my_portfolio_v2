"use client";

import { getIcon } from "../../core/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NavBar(props) {
  const path = usePathname(); // Get the current pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(path === "/");

  // Toggle mobile menu visibility
  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflowY = isMenuOpen ? "auto" : "hidden";
  }

  // Determine if the current path includes the fragment (e.g., #work)
  const getActiveClass = (link) => {
    // Check if the link contains a hash fragment
    const hashIndex = link.indexOf("#");
    const isHashLink = hashIndex !== -1;
    const linkPath = link.split("#")[0]; // Remove the hash part to check path
    const linkHash = isHashLink ? link.substring(hashIndex) : "";

    // Check if the path matches and if the hash fragment matches
    if (isHashLink) {
      // For links like /#work, ensure the path matches and the hash part matches
      if (path === linkPath && window.location.hash === linkHash) {
        return "bg-brand-color text-white"; // Highlight the item
      }
    } else {
      // For non-hash links, just check if the path matches
      if (path === linkPath) {
        return "bg-brand-color text-white"; // Highlight the item
      }
    }

    return "";
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/#work" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <section>
      <div className={`${isHome ? "absolute z-20 w-full top-0" : ""}`}>
        <nav className="flex justify-between items-center px-5 py-3">
          <Link href="/" className="cursor-pointer">
            <Image
              className="rounded-full w-9 h-9 md:w-12 md:h-12 hover:scale-105 transition-transform duration-300 ease-in-out shadow"
              src="/images/logo/logo.svg"
              width={1000}
              height={1000}
              alt="logo"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <div
            className="xs:block sm:hidden rounded-full shadow p-2 bg-white"
            onClick={handleMenu}
          >
            {getIcon("menu")}
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex gap-3 py-3 px-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li
                  className={`${getActiveClass(
                    item.link
                  )} cursor-pointer hover:bg-brand-color py-2 px-5 rounded-full hover:text-white transition-colors duration-200 ease-in-out`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute h-screen w-screen bg-white z-30 p-5 pt-11`}
      >
        <div>
          <div
            className="absolute right-7 h-14 w-14 text-center flex justify-center rounded-full bg-black text-white items-center"
            onClick={handleMenu}
          >
            <p>X</p>
          </div>
          <h2 className="font-bold text-5xl ml-5">Menu</h2>
          <ul className="flex flex-col gap-5 mt-14">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflowY = "auto";
                }}
              >
                <li className="w-min px-5 py-3 cursor-pointer hover:bg-brand-color text-xl rounded-full hover:text-white transition-colors duration-200 ease-in-out">
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
