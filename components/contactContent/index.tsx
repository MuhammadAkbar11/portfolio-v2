import React from "react";
import { motion } from "framer-motion";
import MailLink from "@components/mailLink";
import { contactTextVariants } from "./contactContent.motion";
import Socials from "@components/socials";

type Props = {};

function ContactContent({}: Props) {
  return (
    <>
      <motion.p
        variants={contactTextVariants}
        animate="open"
        initial="closed"
        className=" py-4 md:py-6 pr-16 "
      >
        If you want to learn more about me, what I can do for you, or simply
        talk, send me a message and I'll get back to you as soon as possible!
      </motion.p>
      <MailLink delay={1} />
      <div className=" flex-1 pt-6">
        <Socials delay={1} inView={true} />
      </div>
    </>
  );
}

export default ContactContent;
