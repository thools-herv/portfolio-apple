import GlobalButton from "@/components/GlobalButton";

export default function HeroSectionThirdPanel() {
  return (
    <section>
      <div className="mobile-landscape:h-[650px] laptop-custom:h-[692px] laptop-custom:mt-[13px] relative mt-3 h-[500px]">
        <picture className="cursor-pointer">
          <source
            media="(min-width: 1069px)"
            srcSet="/images/hero_apple_watch_series_12__n9rln7bzvwya_largetall.jpg"
          />
          <source
            media="(min-width: 735px)"
            srcSet="/images/hero_apple_watch_series_12__n9rln7bzvwya_mediumtall.jpg"
          />
          <img
            src="/images/hero_apple_watch_series_12__n9rln7bzvwya_small.jpg"
            alt="iphone duo picture"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </picture>

        <div className="laptop-custom:top-[61px] mobile-landscape:top-[68px] absolute top-[38px] left-1/2 flex w-fit -translate-x-1/2 flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <picture className="cursor-pointer">
              <source
                media="(min-width: 1069px)"
                srcSet="/images/hero_logo_apple_watch_series_12__eze8r897c5me_large.png"
              />
              <source
                media="(min-width: 735px)"
                srcSet="/images/hero_logo_apple_watch_series_12__eze8r897c5me_medium.png"
              />
              <img
                src="/images/hero_logo_apple_watch_series_12__eze8r897c5me_small.png"
                alt="apple watch series 12 picture"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
            </picture>

            <h4 className="laptop-custom:mt-[414px] mobile-landscape:mt-[372px] mt-[284px] text-center leading-[24px] whitespace-nowrap text-white">
              The most accurate heart rate
              <br className="mobile-landscape:hidden block" /> sensing in a
              wearable.
              <span className="absolute -mt-[4px] text-[10px]">2</span>
            </h4>
          </div>

          <div className="mobile-landscape:mt-[18px] laptop-custom:mt-[24px] mt-3 flex justify-center gap-4">
            <GlobalButton buttonTextLabel="Learn more" buttonBG="bg-accent2" />
            <GlobalButton
              buttonTextLabel="Buy"
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
