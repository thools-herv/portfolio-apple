import { useState } from "react";
import DropArrow from "./DropArrow";
import {
  aboutappleListNavs,
  accountListNavs,
  applestoreListNavs,
  applevaluesListNavs,
  applewalletListNavs,
  entertainmentListNavs,
  forbusinessListNavs,
  foreducationListNavs,
  forgovernmentListNavs,
  forhealthcareListNavs,
  shopandlearnListNavs,
} from "./FooterLinkNav";

export default function Footer() {
  const FooterLinks = [
    { id: 1, title: "Shop and Learn", listnavs: shopandlearnListNavs },
    { id: 2, title: "Apple Wallet", listnavs: applewalletListNavs },
    { id: 3, title: "Account", listnavs: accountListNavs },
    { id: 4, title: "Entertainment", listnavs: entertainmentListNavs },
    { id: 5, title: "Apple Store", listnavs: applestoreListNavs },
    { id: 6, title: "For Business", listnavs: forbusinessListNavs },
    { id: 7, title: "For Education", listnavs: foreducationListNavs },
    { id: 8, title: "For Healthcare", listnavs: forhealthcareListNavs },
    { id: 9, title: "For Government", listnavs: forgovernmentListNavs },
    { id: 10, title: "Apple Values", listnavs: applevaluesListNavs },
    { id: 11, title: "About Apple", listnavs: aboutappleListNavs },
  ];

  const Policies = [
    "Privacy Policy",
    "Terms of Use",
    "Sales and Refunds",
    "Legal",
    "Site Map",
  ];

  const [isElementOpen, setIsElementOpen] = useState({});

  const handleClickFooter = (id) => {
    setIsElementOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <footer className="bg-background-global flex w-full flex-col items-center justify-center">
      <div className="tablet-custom:px-[22px] tablet-custom:h-[460px] tablet-custom:columns-5 tablet-custom:[column-gap:18px] tablet-custom:[column-fill:auto] h-auto w-full px-4 min-[1024px]:max-w-[1024px]">
        {FooterLinks?.map((link) => {
          const isVisible = isElementOpen[link.id];
          return (
            <div
              key={link.id}
              onClick={() => handleClickFooter(link.id)}
              className="w-full cursor-pointer"
              style={{
                height: link.height,
                breakInside: "avoid",
              }}
            >
              <div className="flex items-center justify-between py-[10px]">
                <h3 className="text-accent5 text-[13px] font-medium">
                  {link.title}
                </h3>
                <DropArrow activeElement={isVisible} />
              </div>

              {/* footer list navs ------------------------ */}

              {link.listnavs && link.listnavs.length > 0 && (
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isVisible
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } tablet-custom:grid-rows-[1fr] tablet-custom:opacity-100 overflow-hidden`}
                >
                  <ul className="min-h-0 space-y-1.5 pb-2">
                    {link.listnavs.map((list, index) => (
                      <li
                        key={index}
                        className="text-[12px] font-light text-gray-500"
                      >
                        {list.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <hr className="tablet-custom:hidden border-black/20" />
            </div>
          );
        })}
      </div>
      <div className="text-accent4 tablet-custom:px-[22px] my-4 flex w-full flex-col gap-2 px-4 text-[12px] font-light min-[1024px]:max-w-[1024px]">
        <p className="whitespace-nowrap">
          More ways to shop:{" "}
          <a href="#" className="text-accent1 underline">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-accent1 underline">
            other retailer
          </a>{" "}
          near you. <br className="min-[647px]:hidden" /> Or call{" "}
          <a href="#" className="text-accent1 underline">
            1-800-MY-APPLE
          </a>{" "}
          (1-800-692-7753).
        </p>
        <hr className="tablet-custom:block my-3 hidden border-black/20" />
        <div className="tablet-custom:flex-row-reverse tablet-custom:justify-between flex flex-col gap-2">
          <p>United States</p>
          <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
        </div>
        <div className="tablet-custom:-mt-2 flex gap-2">
          {Policies.map((policy, index) => {
            return (
              <div key={index} className="flex gap-2">
                <p>{policy}</p>
                {index !== Policies.length - 1 && <p>|</p>}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
