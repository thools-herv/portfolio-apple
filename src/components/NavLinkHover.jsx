export default function NavLinkHover({
  firstPanelTitle,
  firstPanel,
  firstPanelsubTitleFirst,
  firstPanelsubTitleSecond,

  secondPanelTitle,
  secondPanel,

  thirdPanelTitle,
  thirdPanel,
}) {
  const wrapperClass = firstPanelsubTitleFirst ? "grid gap-1.5 pt-5" : "";
  // if (!firstPanelsubTitleFirst) return null;

  return (
    <section className="w-full">
      <div className="">
        <div className="mx-auto flex max-w-[980px]">
          <div className="pr-[88px]">
            <p className="text-accent3 text-xs">{firstPanelTitle}</p>

            <ul className="mt-[16px] flex flex-col gap-[6px]">
              {firstPanel?.map((list) => (
                <li key={list.id} className="cursor-pointer text-2xl">
                  <p>{list.title}</p>
                </li>
              ))}
            </ul>
            <div className={wrapperClass}>
              <p className="text-xs">{firstPanelsubTitleFirst}</p>
              <p className="text-xs">{firstPanelsubTitleSecond}</p>
            </div>
          </div>

          <div className="pr-[44px]">
            <p className="text-accent3 text-xs">{secondPanelTitle}</p>
            <ul className="mt-[20px] flex cursor-pointer flex-col gap-[8px]">
              {secondPanel?.map((list) => (
                <li key={list.id} className="text-xs">
                  <p className="">{list.title}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="pr-[44px]">
            <p className="text-accent3 text-xs">{thirdPanelTitle}</p>
            <ul className="mt-[20px] flex flex-col gap-[8px]">
              {thirdPanel?.map((list) => (
                <li key={list.id} className="text-xs">
                  <p>{list.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
