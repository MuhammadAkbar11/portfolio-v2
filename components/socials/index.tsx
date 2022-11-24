import React from "react";
import { motion } from "framer-motion";
import clsx from "classnames";
import { socialsVariants } from "./socials.motion";
import SocialsIcon from "./socialsIcon";
import LinkedInIcon from "@components/icon/linkedIn";
import GithubIcon from "@components/icon/github";

type Props = {
  inView: boolean;
  className?: string;
  delay?: number;
};

function Socials({ className, inView, delay }: Props) {
  return (
    <motion.div
      variants={socialsVariants(delay)}
      className={clsx("flex gap-6 ", className)}
      initial="closed"
      animate={!inView ? "" : "open"}
    >
      {[
        {
          id: 1,
          Icon: GithubIcon,
          href: "https://github.com/MuhammadAkbar11",
        },
        {
          id: 2,
          Icon: LinkedInIcon,
          href: "https://www.linkedin.com/in/muhammadakbarletlet/",
        },
      ].map(icon => {
        const { Icon } = icon;
        return (
          <SocialsIcon
            key={icon.id}
            href={icon.href}
            icon={
              <div className="h-5 w-5   md:h-6 md:w-6 hover:text-light">
                <Icon />
              </div>
            }
          />
        );
      })}
    </motion.div>
  );
}

export default Socials;
