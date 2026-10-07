import { useState } from "react";
import NavLink from "./NavLink";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-12 w-12 cursor-pointer items-center justify-center"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <div
          className={`absolute top-1/2 h-[1px] w-4 -translate-y-1/2 rounded-full bg-white transition-all duration-500 ease-in-out ${isOpen === true ? " w-4.5 rotate-45 opacity-100" : "-mt-[4px] "}`}
        />
        <div
          className={`absolute top-1/2 h-[1px] w-4 -translate-y-1/2 rounded-full bg-white transition-all duration-500 ease-in-out ${isOpen === true ? " w-4.5 -rotate-45 opacity-100" : "mt-[3px] "}`}
        />
      </div>
      {isOpen && (
        <div>
          <div className="absolute top-12 left-0 h-screen w-full bg-green-500">
            <NavLink />
          </div>
        </div>
      )}
    </div>
  );
}

// <button
//   className={`-mt-[1px] flex h-[9px] w-full cursor-pointer flex-col items-center justify-between bg-transparent ${isOpen === true && "hidden"}`}
// >
//   <span className={`bg-secondary h-0.5 w-4 rounded-full`} />

//   <span className={`bg-secondary h-0.5 w-4 rounded-full`} />
// </button>

// <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//   <div
//     className={`absolute h-0.5 w-6 rounded-full bg-green-500 transition-all duration-1000 ease-in-out ${isOpen === true ? "rotate-45 opacity-100" : "opacity-0"}`}
//   />
//   <div
//     className={`h-0.5 w-6 rounded-full bg-blue-500 transition-all duration-1000 ease-in-out ${isOpen === true ? "-rotate-45 opacity-100" : "opacity-0"}`}
//   />
// </div>
