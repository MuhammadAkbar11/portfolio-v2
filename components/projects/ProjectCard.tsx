import React from "react";
import { motion } from "framer-motion";
import { WorkProjectItem } from "@utils/constants.utils";
import { useCursorContext } from "@@context/CursorContext";
import ProjectLink from "./ProjectLink";
import {
  projectCardVariants,
  projectContentVariants,
  projectImageBox,
  projectImageVariants,
} from "./project.motion";
import Image from "next/image";

type Props = {
  project: WorkProjectItem;
  index: number;
};

function ProjectCard({ project, index }: Props) {
  const cursorContext = useCursorContext();

  return (
    <motion.article
      variants={projectCardVariants(0.1)}
      initial="closed"
      whileInView="open"
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden border border-slate/25 mb-12 last:mb-0 bg-secondary/70 min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
        <motion.div
          variants={projectImageBox}
          className="relative col-span-1 lg:col-span-2 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate/20 h-[300px] sm:h-[450px] lg:h-auto"
        >
          <motion.div
            variants={projectImageVariants}
            whileHover="hover"
            className="h-full w-full relative"
          >
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={projectContentVariants}
          className="col-span-1 lg:col-span-3 flex flex-col px-6 sm:px-12 py-10 sm:py-16"
          onMouseEnter={() => cursorContext.cursorEnter("default")}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono italic text-primary text-sm sm:text-base">{`_${project.year}`}</span>
            <h3 className="font-heading text-light uppercase text-[32px] leading-[34px] sm:text-[48px] sm:leading-[50px]">
              {project.title}
            </h3>
          </div>
          <p className="font-body text-lightness-slate text-lg sm:text-xl leading-relaxed mb-6 max-w-2xl">
            {project.summary}
          </p>
          <p className="font-body text-slate text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {project.stacks.map(stack => (
              <span
                key={`${project.id}-${stack}`}
                className="px-4 py-1.5 text-xs sm:text-sm uppercase tracking-widest border border-primary/20 text-primary/80 font-mono italic bg-primary/5"
              >
                {stack}
              </span>
            ))}
          </div>
          <div className="flex gap-8 mt-auto flex-wrap">
            {project.links.map(link => (
              <ProjectLink key={link.key} href={link.href} label={link.label} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
