import Header from "@layouts/header";
import React from "react";

type Props = {
  children: React.ReactNode;
  contentClass?: string;
};

function Template({ children }: Props) {
  return (
    <div className="wrapper text-slate flex flex-col min-h-screen  pt-[85px] bg-secondary ">
      <Header />
      <main className=" relative flex flex-col flex-1 h-full w-full  bg-secondary">
        {children}
      </main>
    </div>
  );
}

export default Template;
