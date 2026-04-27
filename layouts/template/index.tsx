import Header from "@layouts/header";
import React from "react";
import clsx from "classnames";

type Props = {
  children: React.ReactNode;
  contentClass?: string;
};

function Template({ children, contentClass }: Props) {
  return (
    <div className="wrapper text-slate flex flex-col min-h-screen  pt-[85px] bg-secondary ">
      <Header />
      <main
        className={clsx(
          " relative flex flex-col flex-1 h-full w-full  bg-secondary",
          contentClass,
        )}
      >
        {children}
      </main>
    </div>
  );
}

export default Template;
