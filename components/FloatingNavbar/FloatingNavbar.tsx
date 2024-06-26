"use client";
import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeSwitcher } from "../ThemeSwitcher";
import Modal from "../ui/modal";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
  <div
      className={`z-[10] fixed top-0 w-full max-w-7xl light:bg-white border-b border-transparent ${
        visible && "dark:bg-black border-neutral-200 dark:border-white/[0.1]"
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 py-4">
        <div>LOGO</div>
        <div className="flex gap-5 items-center lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
          </button>
          <ThemeSwitcher className="lg:hidden" />
        </div>
        <nav
          className={`hidden lg:flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 bg-[#27272A] ${className}`}
        >
          {navItems.map((navItem, idx) => (
            <NavItem key={`link=${idx}`} navItem={navItem} />
          ))}
        </nav>
        <ThemeSwitcher className="hidden lg:flex" />
      </div>
      <MobileNav isOpen={menuOpen} toggleMenu={toggleMenu} navItems={navItems} />
    </div>
  );
};
