import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Modal from "../ui/modal";

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleMenu, navItems }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={toggleMenu}>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div>
              <div className="flex -items-center justify-between">
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navigation
                </h2>
                <button onClick={toggleMenu} className="focus:outline-none">
                  <span className="h-6 w-6 text-zinc-500 dark:text-zinc-400">&#x2715;</span>
                </button>
              </div>
              <nav className="mt-6">
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
                >
                  {navItems.map((navItem, idx) => (
                    <motion.li
                      key={`mobile-link=${idx}`}
                      variants={itemVariants}
                      className="block px-3 py-2 text-zinc-800 dark:text-zinc-200 hover:text-teal-500 dark:hover:text-teal-400 transition"
                    >
                      <Link
                        href={navItem.link}
                        onClick={() => toggleMenu()} // Close menu on link click
                        className="block py-2"
                      >
                        {navItem.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
