import GlobalButton from "@/components/GlobalButton";

export default function HomepageNavCardsSection() {
  const navCards = [
    {
      id: 1,
      title: {
        type: "image",
        alt: "apple watch ultra 4 logo",
        fallback:
          "/images/promo_logo_apple_watch_ultra_4__bc6ish8cjaeq_small.png",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet:
              "/images/promo_logo_apple_watch_ultra_4__bc6ish8cjaeq_large.png",
          },
          {
            media: "(min-width: 735px)",
            srcSet:
              "/images/promo_logo_apple_watch_ultra_4__bc6ish8cjaeq_medium.png",
          },
        ],
      },
      description: "A battery you can't outrun",
      textColor: "text-white",

      bgImage: {
        alt: "apple watch ultra 4 picture",
        fallback: "/images/promo_apple_watch_ultra_4__e4r3qertak2u_small.jpg",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_apple_watch_ultra_4__e4r3qertak2u_large.jpg",
          },
          {
            media: "(min-width: 735px)",
            srcSet:
              "/images/promo_apple_watch_ultra_4__e4r3qertak2u_medium.jpg",
          },
        ],
      },
    },

    {
      id: 2,
      title: {
        type: "text",
        content: "Mac mini",
      },
      description: "Now with M6 and M5 Pro.",
      textColor: "text-black",

      bgImage: {
        alt: "apple watch ultra 4 picture",
        fallback: "/images/promo_mac_mini_m6__pwypzbjgopea_small.jpg",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_mac_mini_m6__pwypzbjgopea_large.jpg",
          },
          {
            media: "(min-width: 735px)",
            srcSet: "/images/promo_mac_mini_m6__pwypzbjgopea_medium.jpg",
          },
        ],
      },
    },

    {
      id: 3,
      title: {
        type: "text",
        content: "MacBook Air",
      },
      description: "Now sipercharged by M5.",
      textColor: "text-black",

      bgImage: {
        alt: "apple watch ultra 4 picture",
        fallback: "/images/promo_macbook_air_m5__e5xk2yysqiie_small.jpg",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_macbook_air_m5__e5xk2yysqiie_large.jpg",
          },
          {
            media: "(min-width: 735px)",
            srcSet: "/images/promo_macbook_air_m5__e5xk2yysqiie_medium.jpg",
          },
        ],
      },
    },

    {
      id: 4,
      title: {
        type: "image",
        alt: "ipad air logo",
        fallback: "/images/promo_logo_ipad_air__dqdj4ni03quu_small.png",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_logo_ipad_air__dqdj4ni03quu_large.png",
          },
          {
            media: "(min-width: 735px)",
            srcSet: "/images/promo_logo_ipad_air__dqdj4ni03quu_medium.png",
          },
        ],
      },
      description: "Now supercharged by M4.",
      textColor: "text-black",

      bgImage: {
        alt: "ipad air picture",
        fallback: "/images/promo_ipad_air_m4__bgcv7t286k8y_small.jpg",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_ipad_air_m4__bgcv7t286k8y_large.jpg",
          },
          {
            media: "(min-width: 735px)",
            srcSet: "/images/promo_ipad_air_m4__bgcv7t286k8y_medium.jpg",
          },
        ],
      },
    },

    {
      id: 5,
      title: {
        type: "image",
        alt: "apple upgrade logo",
        fallback: "/images/promo_logo_apple_upgrade__lwuohffdzjem_small.png",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_logo_apple_upgrade__lwuohffdzjem_large.png",
          },
          {
            media: "(min-width: 735px)",
            srcSet: "/images/promo_logo_apple_upgrade__lwuohffdzjem_medium.png",
          },
        ],
      },
      description: (
        <>
          Love it. Lease it. Upgrade it.
          <sup className="text-[10px]">3</sup>
        </>
      ),
      textColor: "text-black",

      bgImage: {
        alt: "apple phone upgrade picture",
        fallback: "/images/promo_apple_upgrade__jvn6udm4tx2e_small.jpg",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_apple_upgrade__jvn6udm4tx2e_large.jpg",
          },
          {
            media: "(min-width: 735px)",
            srcSet: "/images/promo_apple_upgrade__jvn6udm4tx2e_medium.jpg",
          },
        ],
      },
    },

    {
      id: 6,
      title: {
        type: "image",
        alt: "apple card logo",
        fallback: "/images/promo_logo_apple_card__28vxrcexz0ia_small.png",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_logo_apple_card__28vxrcexz0ia_large.png",
          },
          {
            media: "(min-width: 735px)",
            srcSet: "/images/promo_logo_apple_card__28vxrcexz0ia_medium.png",
          },
        ],
      },
      description: "Get up to 3% Daily Cash back with every purchase",
      textColor: "text-black",

      bgImage: {
        alt: "apple card picture",
        fallback: "/images/promo_apple_card__d8xz4kd4evwy_small.jpg",
        sources: [
          {
            media: "(min-width: 1069px)",
            srcSet: "/images/promo_apple_card__d8xz4kd4evwy_large.jpg",
          },
          {
            media: "(min-width: 735px)",
            srcSet: "/images/promo_apple_card__d8xz4kd4evwy_medium.jpg",
          },
        ],
      },
    },
  ];
  return (
    <section>
      <div className="mobile-landscape:grid-cols-2 mobile-landscape:px-3 mt-3 grid grid-cols-1 gap-3">
        {navCards.map((card) => (
          <div
            key={card.id}
            className="relative h-[500px] w-full overflow-hidden"
          >
            <picture className="absolute inset-0 -z-10 h-full w-full">
              {card.bgImage.sources.map((source, index) => (
                <source
                  key={index}
                  media={source.media}
                  srcSet={source.srcSet}
                />
              ))}
              <img
                src={card.bgImage.fallback}
                alt={card.bgImage.alt}
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
            </picture>

            <div className="relative z-10 mt-[42px] flex h-full w-full flex-col items-center gap-3.5 text-center">
              <div className="">
                {card.title.type === "image" ? (
                  <picture>
                    {card.title.sources.map((source, index) => (
                      <source
                        key={index}
                        media={source.media}
                        srcSet={source.srcSet}
                      />
                    ))}
                    <img
                      src={card.title.fallback}
                      alt={card.title.alt}
                      className="h-full w-full object-cover object-top"
                    />
                  </picture>
                ) : (
                  <h4 className="laptop-custom:text-[40px] text-[32px] leading-none font-bold">
                    {card.title.content}
                  </h4>
                )}
              </div>

              <p
                className={`laptop-custom:text-[21px] laptop-custom:w-[280px] text-[19px] leading-none font-light ${card.textColor} ${card.title.type === "image" ? "-mt-[14px]" : "-mt-[4px]"} w-[250px] tracking-tighter`}
              >
                {card.description}
              </p>

              <div className="flex gap-4">
                <GlobalButton
                  buttonTextLabel="Learn more"
                  buttonBG="bg-accent2"
                  buttonTextSize="text-sm"
                />

                <div className={`${card.id === 5 ? "hidden" : "block"}`}>
                  <GlobalButton
                    buttonTextLabel={`${card.id === 6 ? "Apply now" : "Buy"}`}
                    buttonBG="transparent"
                    buttonTextColor="text-accent2"
                    buttonBorder="shadow-border-inset"
                    buttonTextSize="text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
