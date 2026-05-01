import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLayout } from "@@context/LayoutContext";
import { useRouter } from "next/router";
import clsx from "classnames";
import {
  mobileMenuVariants,
  mobileMenuPanelVariants,
  mobileMenuItemVariants,
  mobileMenuSocialVariants,
  mobileMenuNav,
  mobileMenuHeaderPanelVariants,
} from "./mobileMenu.motion";
import { NAV_LINKS } from "@utils/constants.utils";
import GithubIcon from "@components/icon/github";
// import LinkedInIcon from "@components/icon/linkedIn";
import Image from "next/image";
import { useTransition } from "@@context/TransitionContext";

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useLayout();
  const { navigateTo } = useTransition();
  const router = useRouter();

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const links = [...NAV_LINKS, { key: "#3", name: "Contact", url: "/contact" }];

  return (
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <motion.div
          key="mobile-menu"
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-[100] flex flex-col md:hidden"
        >
          {/* Backdrop/Background */}
          <motion.div
            variants={mobileMenuPanelVariants}
            className="absolute inset-0 bg-secondary flex flex-col px-8 py-12"
          >
            {/* Header Area */}
            <motion.div
              variants={mobileMenuHeaderPanelVariants}
              className="flex justify-between items-center mb-16"
            >
              <motion.div>
                <a
                  onClick={() => {
                    closeMobileMenu();
                    navigateTo("/");
                  }}
                  className="cursor-pointer"
                >
                  <Image
                    src="/images/logo.png"
                    width={40}
                    height={40}
                    alt="Logo"
                  />
                </a>
              </motion.div>
              <button
                onClick={closeMobileMenu}
                className="text-primary font-mono italic text-lg"
              >
                _Close
              </button>
            </motion.div>

            {/* Navigation Links */}
            <motion.nav
              className="flex-1 flex flex-col justify-center items-start space-y-8"
              variants={mobileMenuNav}
            >
              {links.map((link, idx) => (
                <motion.div
                  key={link.key}
                  variants={mobileMenuItemVariants}
                  className="relative group"
                >
                  <a
                    onClick={() => {
                      closeMobileMenu();
                      navigateTo(link.url);
                    }}
                    className={clsx(
                      "group relative font-heading text-[12vw] sm:text-[10vw] uppercase leading-none block overflow-hidden cursor-pointer",
                      router.pathname === link.url
                        ? "text-primary"
                        : "text-light",
                    )}
                  >
                    {/* Text Layer 1 */}
                    <span className="relative block transition-transform duration-500 ease-expo group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    {/* Text Layer 2 (Duplicate) */}
                    <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-expo group-hover:translate-y-0 text-primary">
                      {link.name}
                    </span>
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            {/* Social Links */}
            <motion.div
              variants={mobileMenuSocialVariants}
              className="mt-auto pt-8 border-t border-slate/20 flex flex-col space-y-4"
            >
              <span className="text-slate font-mono text-sm italic uppercase tracking-widest">
                _Connect
              </span>
              <div className="flex gap-8">
                <a
                  href="https://github.com/MuhammadAkbar11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm"
                >
                  <GithubIcon />
                  GITHUB
                </a>
                {/* <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm"
                >
                  <LinkedInIcon />
                  LINKEDIN
                </a> */}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
