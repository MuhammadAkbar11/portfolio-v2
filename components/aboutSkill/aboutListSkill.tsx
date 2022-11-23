import React from "react";
import AboutSkillItem from "./aboutSkillItem";

type Props = {
  skills: string[];
};

function AboutListSkill({ skills }: Props) {
  return (
    <>
      <ul className=" flex flex-col sm:grid sm:grid-cols-2 gap-4 md:gap-6 ">
        {skills.map((skill, idx) => {
          const key = idx + 1;
          return <AboutSkillItem key={key} order={key} name={skill} />;
        })}
      </ul>
    </>
  );
}

export default AboutListSkill;
