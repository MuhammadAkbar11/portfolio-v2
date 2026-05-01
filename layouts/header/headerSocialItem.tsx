import React from "react";
import { motion } from "framer-motion";

type Props = {
  href: string;
  icon: JSX.Element;
};

function HeaderSocialItem({ href, icon }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2, ease: [0.6, 0.01, -0.05, 0.95] }}
      className="h-8 w-8 p-2 flex justify-center items-center text-sm box-border rounded-full hover:text-lightness-slate transition-colors duration-300"
    >
      {icon}
    </motion.a>
  );
}

export default HeaderSocialItem;
