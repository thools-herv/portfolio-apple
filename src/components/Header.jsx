import { ShoppingBagIcon, LensIcon, MainLogo } from "@/Icons";
import NavLink from "./NavLink";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    if (!menuRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width === 0 && entry.contentRect.height === 0) {
          setIsOpen(false);
        }
      }
    });
    observer.observe(menuRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <h1 className="sr-only">Apple</h1>
      <div className="tablet-custom:h-11 bg-background03 fixed top-0 left-0 z-[50] flex h-12 w-full backdrop-blur-md"></div>
      <div className="fixed top-0 left-0 z-[100] flex w-full justify-center bg-transparent">
        <div className="tablet-custom:px-[10px] flex w-full max-w-[1030px] justify-around">
          <div
            className={`tablet-custom:h-11 tablet-custom:mr-0 tablet-custom:w-11 mr-auto flex h-12 w-12 items-center justify-center transition-colors duration-1000 ease-in-out ${isOpen === true ? "text-background04" : "text-secondary cursor-pointer"}`}
          >
            <MainLogo />
          </div>
          <div className="tablet-custom:flex hidden w-full max-w-[868px] whitespace-nowrap">
            <NavLink
              layout="flex h-full items-center justify-around"
              attribute="font-inter text-[11.2px] font-thin tracking-wide text-white antialiased"
              positioning="flex h-full cursor-pointer items-center  px-3"
            />
          </div>
          <div
            className={`tablet-custom:h-11 tablet-custom:w-11 flex h-12 w-12 items-center justify-center transition-colors duration-1000 ease-in-out ${isOpen === true ? "text-background04" : "text-secondary cursor-pointer"}`}
          >
            <LensIcon className="" />
          </div>
          <div
            className={`tablet-custom:h-11 tablet-custom:mr-0 tablet-custom:w-11 flex h-12 w-12 items-center justify-center transition-colors duration-1000 ease-in-out ${isOpen === true ? "text-background04 mr-[63px]" : "text-secondary mr-12 cursor-pointer "}`}
          >
            <ShoppingBagIcon />
          </div>
        </div>
      </div>

      <div ref={menuRef} className="tablet-custom:hidden">
        <div className="fixed top-0 right-0 z-200">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-12 w-12 cursor-pointer items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div
              className={`absolute top-1/2 h-[1px] w-4 -translate-y-1/2 rounded-full bg-white transition-transform duration-500 ease-in-out ${isOpen === true ? " mr-[30px] w-4.5 rotate-45 " : "-mt-[4px] "}`}
            />
            <div
              className={`absolute top-1/2 h-[1px] w-4 -translate-y-1/2 rounded-full bg-white transition-transform duration-500 ease-in-out ${isOpen === true ? " mr-[30px] w-4.5 -rotate-45" : "mt-[3px] "}`}
            />
          </div>
        </div>
        {isOpen && (
          <div className="tablet-custom:h-11 bg-background04 fixed top-0 left-0 z-[60] flex h-12 w-[calc(100%-15px)]"></div>
        )}
        <div
          className={`bg-background04 fixed top-0 left-0 z-[50] h-full w-full transition-transform duration-500 ease-in-out ${
            isOpen
              ? "translate-y-0 overflow-auto "
              : " -translate-y-full overflow-hidden "
          }`}
        >
          <div className="mt-[54px] mb-[84px] ml-[47px] flex flex-col">
            <NavLink
              isOpen={isOpen}
              layout="flex flex-col"
              attribute="text-[28px] tracking-tighter font-bold py-1"
              positioning="flex  items-center justify-between text-white"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
