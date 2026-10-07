// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroSectionFirstPanel from "./HeroSectionFirstPanel";
import HeroSectionSecondPanel from "./HeroSectionSecondPanel";
import HeroSectionThirdPanel from "./HeroSectionThirdPanel";

export default function HomepageHeroSection() {
  return (
    <section>
      {/* <div className="mobile-landscape:flex-row mobile-landscape:tracking-[-0.70px] tablet-custom:pt-1 laptop-custom:pb-[3px] mt-14 ml-1 flex flex-col items-center justify-center pt-2 pb-[10px] text-[15px] leading-[20px] tracking-[-0.60px]">
        <div className="font-light">
          Get 3 months of Apple One free with any new &nbsp;
        </div>

        <div className="flex items-center font-light">
          <p>
            iPhone, iPad, or Mac.
            <span className="absolute -mt-[4px] text-[8px] underline">1</span>
            &nbsp;
          </p>
          &nbsp;
          <span className="text-accent1 ml-[1px] cursor-pointer">
            Learn more
          </span>
          <MdOutlineKeyboardArrowRight className="text-accent1 mt-[2px]" />
        </div>
      </div> */}
      <HeroSectionFirstPanel />
      <HeroSectionSecondPanel />
      <HeroSectionThirdPanel />
    </section>
  );
}
