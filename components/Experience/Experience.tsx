"use client";
import React, { useState } from "react";
import Experience_1 from "./Experience_1";
import SidebarForShowingCompanies from "./SidebarForShowingCompanies";
import Experience_2 from "./Experience_2";

const Experience: React.FC = () => {
  const [showExp1, setShowExp1] = useState<boolean>(true);
  const [showExp2, setShowExp2] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<"exp1" | "exp2">("exp1");

  const showExp1Handler = (): void => {
    setShowExp1(true);
    setShowExp2(false);
    setIsActive("exp1");
  };

  const showExp2Handler = (): void => {
    setShowExp2(true);
    setIsActive("exp2");
    setShowExp1(false);
  };

  return (
    <>
      <section className="space-y-10">
        <h1 className="text-5xl text-center">Experience</h1>
        <div className="lg:flex bg-yellow-40 space-x-10 w-[80%] mx-auto">
          <div className="bg-red-40 w-1/3">
            <SidebarForShowingCompanies
              showExp1Handler={showExp1Handler}
              showExp2Handler={showExp2Handler}
              isActive={isActive}
            />
          </div>
          <div className="bg-green-40">
            {showExp1 && <Experience_1 />}
            {showExp2 && <Experience_2 />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
