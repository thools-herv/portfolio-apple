import { ShoppingBagIcon, LensIcon, MainLogo } from "@/Icons";
import Menubar from "./Menubar";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header>
      <h1 className="sr-only">Apple</h1>
      <div className="bg-background-global fixed top-0 left-0 z-50 flex w-full justify-center">
        <div className="tablet-custom:px-[10px] flex w-full max-w-[1030px] justify-around">
          <div className="tablet-custom:h-11 tablet-custom:mr-0 tablet-custom:w-11 mr-auto flex h-12 w-12 cursor-pointer items-center justify-center">
            <MainLogo />
          </div>
          <div className="tablet-custom:flex hidden w-full max-w-[868px]">
            <NavLink />
          </div>
          <div className="tablet-custom:h-11 tablet-custom:w-11 flex h-12 w-12 cursor-pointer items-center justify-center">
            <LensIcon />
          </div>
          <div className="tablet-custom:h-11 tablet-custom:w-11 flex h-12 w-12 cursor-pointer items-center justify-center">
            <ShoppingBagIcon />
          </div>
          <div className="tablet-custom:hidden">
            <Menubar />
          </div>
        </div>
      </div>
    </header>
  );
}

// bg-background-global
