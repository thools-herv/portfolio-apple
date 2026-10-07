import { useEffect, useRef, useState } from "react";
import { RightArrowIcon } from "@/Icons";

import { NavHoverMenu } from "./NavListItem";

export default function NavLink({ layout, attribute, positioning, isOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const [activeTabName, setActiveTabName] = useState("");

  const contentRef = useRef(null);

  const handleMouseLeaveNavbar = () => {
    setMenuHeight(0);
  };

  const handleMouseLeaveactiveMenu = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientY >= rect.bottom - 1) {
      setMenuHeight(0);
    }
  };

  useEffect(() => {
    if (activeMenu && contentRef.current) {
      requestAnimationFrame(() => {
        if (contentRef.current) {
          const currentHeight = Math.min(contentRef.current.scrollHeight);
          setMenuHeight(currentHeight);
        }
      });
    }
  }, [activeMenu]);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (menuHeight > 0) {
        handleMouseLeaveNavbar();
      }
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [menuHeight]);

  const navLinks = [
    { id: 1, title: "Store", subMenu: "storeHover" },
    { id: 2, title: "Mac", subMenu: "macHover" },
    { id: 3, title: "iPad", subMenu: "iPadHover" },
    { id: 4, title: "iPhone", subMenu: "iPhoneHover" },
    { id: 5, title: "Watch", subMenu: "watchHover" },
    { id: 6, title: "Vision", subMenu: "visionHover" },
    { id: 7, title: "AirPods", subMenu: "airPodsHover" },
    { id: 8, title: "TV & Home", subMenu: "tvandhomeHover" },
    { id: 9, title: "Entertainment", subMenu: "entertainmentHover" },
    { id: 10, title: "Accessories", subMenu: "accessoriestHover" },
    { id: 11, title: "Support", subMenu: "supportHover" },
  ];
  // console.log(isOpen);
  // console.log(activeMenu);
  // console.log(activeTabName);
  return (
    <section className="w-full" onMouseLeave={handleMouseLeaveNavbar}>
      <ul className={`${layout}`}>
        {navLinks.map((link) => (
          <li
            key={link.id}
            onMouseEnter={() => {
              if (!isOpen) {
                setActiveMenu(link.subMenu || null);
                setActiveTabName(link.title);
              }
            }}
            className={`group ${positioning} cursor-pointer`}
          >
            <h5 className={`${attribute}`}>{link.title}</h5>

            {isOpen && (
              <div className="mr-8 -translate-x-3 rotate-180 opacity-0 transition-[transform] duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:transition-all">
                <RightArrowIcon />
              </div>
            )}
          </li>
        ))}
      </ul>

      {activeMenu && (
        <div>
          <div className="bg-background04 fixed top-0 left-0 -z-[10] h-11 w-full" />
          <div
            className={`fixed top-0 left-0 -z-[20] h-full w-full bg-black/10 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
              menuHeight === 0 ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          />

          <div
            onTransitionEnd={() => {
              if (menuHeight === 0) {
                setActiveMenu(null);
                setActiveTabName("");
              }
            }}
            onMouseLeave={handleMouseLeaveactiveMenu}
            className="bg-background04 fixed top-11 left-0 -z-[10] grid max-h-[calc(100vh-132px)] w-full overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out"
            style={{
              gridTemplateRows: `${menuHeight}px`,
            }}
          >
            <div className="relative w-full">
              <div
                ref={contentRef}
                key={activeTabName}
                className="absolute top-0 left-0 h-[calc(100vh-132px)] max-h-fit w-full overflow-y-auto pt-[38px] pb-[68px] text-white opacity-100 transition-opacity duration-500 ease-in-out starting:opacity-0"
              >
                <NavHoverMenu category={activeMenu} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
