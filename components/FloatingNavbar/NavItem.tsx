import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface NavItemProps {
  navItem: {
    name: string;
    link: string;
    icon?: JSX.Element;
  };
}

const NavItem: React.FC<NavItemProps> = ({ navItem }) => {
  return (
    <Link
      href={navItem.link}
      className={cn(
        "relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer"
      )}
    >
      <span className="block sm:hidden">{navItem.icon}</span>
      <span className="text-sm !cursor-pointer">{navItem.name}</span>
    </Link>
  );
};

export default NavItem;
