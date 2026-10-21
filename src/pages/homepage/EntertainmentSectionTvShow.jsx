import GlobalButton from "@/components/GlobalButton";
import { BsDot } from "react-icons/bs";
import { useRef } from "react";
import { useCarouselControl } from "@/components/CarouselControl";

export default function EntertainmentSectionTvShow({
  onGetTotalItems,

  activeDot,
  setActiveDot,
  slideTimer,

  isPlay,
  setIsPlay,

  isPlayActive,
  setIsPlayActive,

  gap,

  setIsSlidingTop,
  isSlidingTop,

  setIsSlidingBottom,

  isSlideLeft,
  setIsSlideLeft,
}) {
  const tvShows = [
    {
      id: 1,
      title: "/tvshow/brothers_small.png",
      alt: "brothers tv show",
      genre: "Comedy",
      description: "Friends. And family?",
      bgImage: {
        fallback: "/tvshow/274x496nr_1.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_1.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_1.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_1.jpg",
          },
        ],
      },
    },

    {
      id: 2,
      title: "/tvshow/slow_horses_small.png",
      alt: "slow horses tv show",
      genre: "Thriller",
      description: "New season.",
      bgImage: {
        fallback: "/tvshow/274x496nr_2.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_2.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_2.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_2.jpg",
          },
        ],
      },
    },

    {
      id: 3,
      title: "/tvshow/f1_small.png",
      alt: "f1 tv show",
      description:
        "Every Grand Prix™, live and on demand—all in one place, all year long.",
      bgImage: {
        fallback: "/tvshow/274x496nr_3.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_3.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_3.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_3.jpg",
          },
        ],
      },
    },

    {
      id: 4,
      title: "/tvshow/ted_laso_small.png",
      alt: "ted lasso tv show",
      genre: "Comedy",
      description: "The hit comedy is back and Tedder than ever.",
      bgImage: {
        fallback: "/tvshow/274x496nr_4.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_4.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_4.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_4.jpg",
          },
        ],
      },
    },

    {
      id: 5,
      title: "/tvshow/mls_small.png",
      alt: "mls tv show",
      description: "Watch every club, every match, live—all season long.",
      bgImage: {
        fallback: "/tvshow/274x496nr_5.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_5.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_5.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_5.jpg",
          },
        ],
      },
    },

    {
      id: 6,
      title: "/tvshow/knife_edge_small.png",
      alt: "knife edge tv show",
      genre: "Documentay",
      description: "New season.",
      bgImage: {
        fallback: "/tvshow/274x496nr_6.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_6.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_6.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_6.jpg",
          },
        ],
      },
    },

    {
      id: 7,
      title: "/tvshow/mayday_small.png",
      alt: "mayday tv show",
      genre: "Action",
      description: "A friendship with major red flags.",
      bgImage: {
        fallback: "/tvshow/274x496nr_7.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_7.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_7.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_7.jpg",
          },
        ],
      },
    },

    {
      id: 8,
      title: "/tvshow/widows_bay_small.png",
      alt: "widow's bay tv show",
      genre: "Comedy",
      description: "14 Emmy® Awards Including Best Comedy",
      bgImage: {
        fallback: "/tvshow/274x496nr_8.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_8.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_8.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_8.jpg",
          },
        ],
      },
    },

    {
      id: 9,
      title: "/tvshow/dark_matter_small.png",
      alt: "dark matter tv show",
      genre: "Sci-Fi",
      description: "There's no world like home.",
      bgImage: {
        fallback: "/tvshow/274x496nr_9.jpg",
        sources: [
          {
            media: "(min-width: 1441px)",
            srcSet: "/tvshow/1250x668sr_9.jpg",
          },
          {
            media: "(min-width: 1069px)",
            srcSet: "/tvshow/980x522sr_9.jpg",
          },

          {
            media: "(min-width: 735px)",
            srcSet: "/tvshow/688x368sr_9.jpg",
          },
        ],
      },
    },

    // {
    //   id: 10,
    //   title: "/tvshow/dark_matter_small.png",
    //   alt: "dark matter tv show",
    //   genre: "Sci-Fi",
    //   description: "There's no world like home.",
    //   bgImage: {
    //     fallback: "/tvshow/274x496nr_9.jpg",
    //     sources: [
    //       {
    //         media: "(min-width: 1441px)",
    //         srcSet: "/tvshow/1250x668sr_9.jpg",
    //       },
    //       {
    //         media: "(min-width: 1069px)",
    //         srcSet: "/tvshow/980x522sr_9.jpg",
    //       },

    //       {
    //         media: "(min-width: 735px)",
    //         srcSet: "/tvshow/688x368sr_9.jpg",
    //       },
    //     ],
    //   },
    // },
    // {
    //   id: 11,
    //   title: "/tvshow/dark_matter_small.png",
    //   alt: "dark matter tv show",
    //   genre: "Sci-Fi",
    //   description: "There's no world like home.",
    //   bgImage: {
    //     fallback: "/tvshow/274x496nr_9.jpg",
    //     sources: [
    //       {
    //         media: "(min-width: 1441px)",
    //         srcSet: "/tvshow/1250x668sr_9.jpg",
    //       },
    //       {
    //         media: "(min-width: 1069px)",
    //         srcSet: "/tvshow/980x522sr_9.jpg",
    //       },

    //       {
    //         media: "(min-width: 735px)",
    //         srcSet: "/tvshow/688x368sr_9.jpg",
    //       },
    //     ],
    //   },
    // },
  ];

  // const [isSliding, setIsSliding] = useState(true);
  const containerRef = useCarouselControl({
    activeDot,
    setActiveDot,
    slideTimer,

    isPlay,
    setIsPlay,

    gap,

    isSlidingTop,
    setIsSlidingTop,

    isSlideLeft,
    setIsSlideLeft,
  });

  const scrollTimeoutRef = useRef(null);
  const isInteracting = useRef(false);
  const startDotRef = useRef(0);

  if (onGetTotalItems) {
    setTimeout(() => {
      onGetTotalItems(tvShows.length);
    }, 0);
  }

  // first load ----------------------------------------------
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (!containerRef.current) return;
  //     const container = containerRef.current;

  //     const firstRealCard = Array.from(container.children).find(
  //       (child) => child.dataset.clone === "false",
  //     );

  //     if (firstRealCard) {
  //       const containerWidth = container.offsetWidth;
  //       const cardWidth = firstRealCard.offsetWidth;
  //       const cardLeft = firstRealCard.offsetLeft;

  //       const targetScrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;

  //       container.scrollTo({
  //         left: targetScrollLeft,
  //         behavior: "auto",
  //       });
  //     }
  //   }, 150);

  //   return () => clearTimeout(timer);
  // }, []);

  // dot -----------------------------------------------
  // useEffect(() => {
  //   if (isSlidingTop) return;

  //   if (!containerRef.current) return;
  //   const container = containerRef.current;

  //   const realCards = Array.from(container.children).filter(
  //     (child) => child.dataset.clone === "false",
  //   );

  //   const targetCard = realCards[activeDot];

  //   if (targetCard) {
  //     const containerWidth = container.offsetWidth;
  //     const cardWidth = targetCard.offsetWidth;
  //     const cardLeft = targetCard.offsetLeft;

  //     const cardToMove = cardWidth + gap;

  //     const targetScrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;
  //     // console.log(startDotRef.current);

  //     if (activeDot === realCards.length - 1) {
  //       if (!isPlay) {
  //         container.scrollTo({
  //           left: targetScrollLeft,
  //           behavior: "smooth",
  //         });

  //         return;
  //       }

  //       clearTimeout(scrollTimeoutRef.current);

  //       scrollTimeoutRef.current = setTimeout(() => {
  //         container.scrollTo({
  //           left: targetScrollLeft + cardToMove,
  //           behavior: "smooth",
  //         });

  //         setTimeout(() => {
  //           const firstcontainerWidth = container.offsetWidth;
  //           const firstcardWidth = realCards[0].offsetWidth;
  //           const firstcardLeft = realCards[0].offsetLeft;

  //           const firstargetScrollLeft =
  //             firstcardLeft - firstcontainerWidth / 2 + firstcardWidth / 2;

  //           container.scrollTo({
  //             left: firstargetScrollLeft,
  //             behavior: "auto",
  //           });
  //         }, slideTimer / 2);
  //       }, slideTimer);
  //     }

  //     if (isPlay) {
  //       if (activeDot > 0) {
  //         container.scrollTo({
  //           left: targetScrollLeft,
  //           behavior: "smooth",
  //         });

  //         // startDotRef.current = container.scrollLeft + cardWidth + gap;
  //       }
  //     } else {
  //       container.scrollTo({
  //         left: targetScrollLeft,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // }, [activeDot, isSlidingTop, slideTimer, isPlay, containerRef]);

  const handleInteractionStart = () => {
    isInteracting.current = true;
    if (!containerRef.current) return;
    const container = containerRef.current;

    startDotRef.current = container.scrollLeft;
    setIsPlay(false);
    setIsSlidingTop(true);
    setIsSlidingBottom(false);
  };

  const handleInteractionEnd = () => {
    isInteracting.current = false;
    if (!containerRef.current) return;
    const container = containerRef.current;

    setTimeout(() => {
      if (
        startDotRef.current === container.scrollLeft &&
        isPlayActive === true
      ) {
        setIsPlay(true);

        setIsSlidingTop(false);
        setIsSlidingBottom(false);
      } else {
        setIsPlayActive(false);
      }
    }, 250);
  };

  // slide -----------------------------------------------
  const handleScroll = () => {
    if (!isSlidingTop) {
      return;
    }
    if (!containerRef.current) return;

    const container = containerRef.current;

    const firstRealCard = Array.from(container.children).filter(
      (child) => child.dataset.clone === "false",
    );

    const arrayMenu = firstRealCard.length;

    if (firstRealCard) {
      const containerWidth = container.offsetWidth;
      const cardWidth = firstRealCard[0].offsetWidth;
      const fullCardLength = cardWidth + gap;

      const hideSpaceWidth =
        fullCardLength - (containerWidth / 2 - cardWidth / 2);

      const totalSpace = container.scrollLeft - hideSpaceWidth;

      const computedActiveDot = totalSpace / fullCardLength;
      const activeDotTemp = Math.floor(computedActiveDot) - 1;

      setActiveDot(activeDotTemp);

      clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        if (activeDotTemp < 0) {
          setActiveDot(arrayMenu - 1);
          setIsSlideLeft(true);

          const activeCard = firstRealCard[arrayMenu - 1];
          const activeCardWidth = activeCard.offsetWidth + gap;
          const activeCardLeft = activeCard.offsetLeft;

          const targetScrollLeft =
            activeCardLeft - containerWidth / 2 + activeCardWidth / 2;

          container.scrollTo({
            left: targetScrollLeft,
            behavior: "auto",
          });
        }

        if (activeDotTemp === arrayMenu) {
          setActiveDot(0);

          const activeCard = firstRealCard[0];
          const activeCardWidth = activeCard.offsetWidth + gap;
          const activeCardLeft = activeCard.offsetLeft;

          const targetScrollLeft =
            activeCardLeft - containerWidth / 2 + activeCardWidth / 2;

          container.scrollTo({
            left: targetScrollLeft,
            behavior: "auto",
          });
        }
      }, 250);
    }
  };

  const arrayWithClones = [
    ...tvShows.slice(-2),
    ...tvShows,
    ...tvShows.slice(0, 2),
  ];

  return (
    <section className="">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        className="carousel-container flex w-full snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto"
      >
        {arrayWithClones.map((show, index) => {
          const isOuterEdge =
            index === 0 || index === arrayWithClones.length - 1;

          return (
            <div
              key={`${show.id}-${index}`}
              data-clone={
                index < 2 || index >= arrayWithClones.length - 2
                  ? "true"
                  : "false"
              }
              className={`card-base-styles relative flex-shrink-0 ${!isOuterEdge ? "snap-center" : ""}`}
            >
              <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-[#4b4605]/2 to-[#000000]/50" />
              <picture className="inset-0 -z-10">
                {show.bgImage.sources.map((source, index) => (
                  <source
                    key={index}
                    media={source.media}
                    srcSet={source.srcSet}
                  />
                ))}
                <img
                  src={show.bgImage.fallback}
                  alt={show.alt}
                  className="h-auto w-auto object-cover object-center"
                />
              </picture>
              <div className="mobile-landscape:hidden absolute top-4 left-1/2 z-20 -translate-x-1/2">
                {![3, 5].includes(show.id) && (
                  <img
                    src="/tvshow/apple_tv_small.png"
                    alt="apple tv icon"
                    className="object-cover object-center"
                  />
                )}
              </div>
              {[3, 5].includes(show.id) ? (
                <div className="mobile-landscape:hidden absolute top-10 left-0 z-20 flex h-auto w-full justify-center">
                  <img
                    src={show.title}
                    alt={show.alt}
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div className="mobile-landscape:hidden absolute top-14 left-0 z-20 flex h-auto w-full justify-center">
                  <img
                    src={show.title}
                    alt={show.alt}
                    className="object-cover object-center"
                  />
                </div>
              )}

              <div className="mobile-landscape:flex-row-reverse mobile-landscape:justify-end mobile-landscape:pl-8 absolute bottom-8 left-0 z-20 flex w-full flex-col items-center gap-4">
                <div className="mobile-landscape:flex-row laptop-custom:text-[21px] flex flex-col items-center text-[17px]">
                  <p className="text-center text-white">{show.genre}</p>
                  {![3, 5].includes(show.id) && (
                    <p className="mobile-landscape:block hidden text-white">
                      <BsDot />
                    </p>
                  )}
                  <p className="mobile-landscape:px-0 mobile-landscape:text-left px-4 text-center font-light text-white">
                    {show.description}
                  </p>
                </div>
                {![3, 5].includes(show.id) && (
                  <div className="whitespace-nowrap">
                    <GlobalButton
                      buttonTextLabel="Stream now"
                      buttonBG="bg-white"
                      buttonTextColor="text-black"
                      buttonTextSize="text-sm laptop-custom:text-[17px]"
                    />
                  </div>
                )}
                {show.id === 3 && (
                  <div className="whitespace-nowrap">
                    <GlobalButton
                      buttonTextLabel="F1 on Apple TV"
                      buttonBG="bg-white"
                      buttonTextColor="text-black"
                      buttonTextSize="text-sm laptop-custom:text-[17px]"
                    />
                  </div>
                )}
                {show.id === 5 && (
                  <div className="whitespace-nowrap">
                    <GlobalButton
                      buttonTextLabel="MLS on Apple TV"
                      buttonBG="bg-white"
                      buttonTextColor="text-black"
                      buttonTextSize="text-sm laptop-custom:text-[17px]"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
