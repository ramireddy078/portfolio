// SidebarForShowingCompanies.tsx
import React from "react";

interface SidebarForShowingCompaniesProps {
  showExp1Handler: () => void;
  showExp2Handler: () => void;
  isActive: "exp1" | "exp2";
}

const SidebarForShowingCompanies: React.FC<SidebarForShowingCompaniesProps> = ({
  showExp1Handler,
  showExp2Handler,
  isActive,
}) => {
  return (
    <div className="flex items-center justify-center text-center w-fit h-fit mb-20 lg:mb-0 lg:flex-col lg:items-center lg:justify-start gap-5 px-3">
      <button
        onClick={showExp1Handler}
        className={`text-3xl font-semibold capitalize pl-3 ${
          isActive === "exp1"
            ? "text-[#2caebd] border-l-4 border-l-[#2caebd]"
            : "text-[#102a42] hover:text-[#2caebd] hover:border-l-4 hover:border-l-[#2caebd]"
        }`}
        // className="text-3xl font-semibold text-gray-600. text-[#102a42] hover:text-[#2caebd] hover:border-l-4 hover:border-l-[#2caebd] pl-3 capitalize"
      >
        Thinsil_Intern
      </button>
      <button
        onClick={showExp2Handler}
        className={`text-3xl font-semibold capitalize pl-3 ${
          isActive === "exp2"
            ? "text-[#2caebd] border-l-4 border-l-[#2caebd]"
            : "text-[#102a42] hover:text-[#2caebd] hover:border-l-4 hover:border-l-[#2caebd]"
        }`}
        // className="text-3xl font-semibold text-[#102a42] hover:text-[#2caebd] hover:border-l-4 hover:border-l-[#2caebd] pl-3 capitalize"
      >
        Thinsil_Fulltime
      </button>
    </div>
  );
};

export default SidebarForShowingCompanies;
