import GlobalButton from "@/components/GlobalButton";

export default function HeroSectionFirstPanel() {
  return (
    <section className="">
      <div className="mobile-landscape:h-[650px] laptop-custom:h-[692px] laptop-custom:mt-[13px] relative mt-[6px] h-[500px]">
        <picture>
          <source
            media="(min-width: 1069px)"
            srcSet="/images/hero_iphone_18_pro__fqe1motd0ymy_largetall.jpg"
          />
          <source
            media="(min-width: 735px)"
            srcSet="/images/hero_iphone_18_pro__fqe1motd0ymy_mediumtall.jpg"
          />
          <img
            src="/images/hero_iphone_18_pro__fqe1motd0ymy_small.jpg"
            alt="iphone 18 pro picture"
            className="h-full w-full object-cover object-center"
            fetchpriority="high"
          />
        </picture>
        <div className="laptop-custom:top-[56px] mobile-landscape:top-[62px] absolute top-[38px] left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold whitespace-nowrap text-white">
              iPhone 18 Pro
            </h2>
            <h4 className="laptop-custom:mt-[6px] mobile-landscape:mt-[2px] ] mt-[5px] text-white">
              Pro further.
            </h4>
          </div>

          <div className="mobile-landscape:mt-[17px] laptop-custom:mt-[15px] mt-2 flex justify-center gap-4">
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

// <p className="mobile-landscape:text-2xl laptop-custom:text-[28px] laptop-custom:mt-[6px] mobile-landscape:mt-[2px] laptop-custom:tracking-[-1.6px] mt-[5px] text-[19px] leading-[1.210] tracking-[-0.8px] text-white">
//   Pro further.
// </p>
