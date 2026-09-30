import GlobalButton from "@/components/GlobalButton";

export default function HeroSectionSecondPanel() {
  return (
    <section>
      <div className="mobile-landscape:h-[650px] laptop-custom:h-[692px] laptop-custom:mt-[13px] relative mt-3 h-[500px]">
        <picture>
          <source
            media="(min-width: 1069px)"
            srcSet="/images/hero_iphone_duo_announce__fh4u8yzndpe2_largetall.jpg"
          />
          <source
            media="(min-width: 735px)"
            srcSet="/images/hero_iphone_duo_announce__fh4u8yzndpe2_mediumtall.jpg"
          />
          <img
            src="/images/hero_iphone_duo_announce__fh4u8yzndpe2_small.jpg"
            alt="iphone duo picture"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </picture>

        <div className="laptop-custom:top-[56px] mobile-landscape:top-[62px] absolute top-[38px] left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mobile-landscape:mt-[2px] -ml-[4px] font-bold whitespace-nowrap">
              iPhone Duo
            </h2>

            <h4 className="laptop-custom:mt-[6px] mobile-landscape:mt-[2px] mt-[5px] font-light">
              Hello, hello.
            </h4>
            <h6 className="mobile-landscape:mt-4 tablet-custom:mt-1">
              Pre-order starting 5:00 a.m. PT on 10.16
            </h6>
            <h6 className="">Available starting 10.23</h6>
          </div>

          <div className="mobile-landscape:mt-[18px] laptop-custom:mt-4 mt-3 flex justify-center gap-4">
            <GlobalButton buttonTextLabel="Learn more" buttonBG="bg-accent2" />
            <GlobalButton
              buttonTextLabel="View pricing"
              buttonBG="transparent"
              buttonTextColor="text-accent2"
              buttonBorder="border-accent2 border-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
