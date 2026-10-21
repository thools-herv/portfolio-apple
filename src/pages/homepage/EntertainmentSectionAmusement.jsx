import GlobalButton from "@/components/GlobalButton";
import { ArcadeIcon, FitnessIcon, MusicIcon } from "@/Icons";
import { useRef } from "react";
import { useCarouselControl } from "@/components/CarouselControl";

const masterData = {
  1: {
    title: "Hello Kitty Island Adventure",
    genre: ArcadeIcon,
    buttonTextLabel: "Play now",

    bgImage: {
      fallback: "/amusement/188x254_1.jpg",
      alt: "hello kitty image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_1.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_1.jpg",
        },
      ],
    },
  },

  2: {
    title: "Miley: The Zane Lowe Interview",
    genre: MusicIcon,
    buttonTextLabel: "Listen now",
    bgColor: "bg-[#000000]",

    bgImage: {
      fallback: "/amusement/188x254_2.jpg",
      alt: "Miley Cyruz image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_2.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_2.jpg",
        },
      ],
    },
  },

  3: {
    title: "Treadmill with Emily Music by Becky G",
    genre: FitnessIcon,
    buttonTextLabel: "Watch now",

    bgImage: {
      fallback: "/amusement/188x254_3.jpg",
      alt: "hello kitty image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_3.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_3.jpg",
        },
      ],
    },
  },

  4: {
    title: "PowerWash Simulator",
    genre: ArcadeIcon,
    buttonTextLabel: "Play now",

    bgImage: {
      fallback: "/amusement/188x254_4.jpg",
      alt: "PowerWash Simulator image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_4.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_4.jpg",
        },
      ],
    },
  },

  5: {
    title: "Treadmill with Emily Music by Becky G",
    genre: MusicIcon,
    buttonTextLabel: "Listen now",
    bgColor: "bg-[#FFA500]",

    bgImage: {
      fallback: "/amusement/188x254_5.jpg",
      alt: "hello kitty image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_5.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_5.jpg",
        },
      ],
    },
  },

  6: {
    title: `Join the Team with "Ted Lasso" `,
    genre: FitnessIcon,
    buttonTextLabel: "Watch now",

    bgImage: {
      fallback: "/amusement/188x254_6.jpg",
      alt: "hello kitty image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_6.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_6.jpg",
        },
      ],
    },
  },

  7: {
    title: "Madden NFL Arcade Edition",
    genre: ArcadeIcon,
    buttonTextLabel: "Play now",

    bgImage: {
      fallback: "/amusement/188x254_7.jpg",
      alt: "NFL image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_7.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_7.jpg",
        },
      ],
    },
  },

  8: {
    title: "Today's Hits",
    genre: MusicIcon,
    buttonTextLabel: "Listen now",
    // bgColor: "bg-#000000",
    bgColor: "bg-[#FFFFFF]",

    bgImage: {
      fallback: "/amusement/188x254_8.jpg",
      alt: "Taylor Swift image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_8.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_8.jpg",
        },
      ],
    },
  },

  9: {
    title: "So Fresh! '90s Dance",
    genre: FitnessIcon,
    buttonTextLabel: "Watch now",

    bgImage: {
      fallback: "/amusement/188x254_9.jpg",
      alt: "hello kitty image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_9.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_9.jpg",
        },
      ],
    },
  },

  10: {
    title: "New Music Daily",
    genre: MusicIcon,
    buttonTextLabel: "Listen now",
    bgColor: "bg-[#7424b5]",

    bgImage: {
      fallback: "/amusement/188x254_10.jpg",
      alt: "NMD image",
      sources: [
        {
          media: "(min-width: 1441px)",
          srcSet: "/amusement/470x264_10.jpg",
        },

        {
          media: "(min-width: 1069px)",
          srcSet: "/amusement/417x234_10.jpg",
        },
      ],
    },
  },
};

export default function EntertainmentSectionAmusement({
  activeDot,
  setActiveDot,
  slideTimer,

  isPlay,
  setIsPlay,

  isPlayActive,
  setIsPlayActive,

  gap,

  setIsSlidingTop,

  setIsSlidingBottom,
  isSlidingBottom,

  isSlideLeft,
  setIsSlideLeft,
}) {
  const amusements = [2, 6, 1, 10, 3, 4, 8, 7, 9];
  const arrayWithClones = [
    ...amusements.slice(-3),
    ...amusements,
    ...amusements.slice(0, 3),
  ];

  // const [isSliding, setIsSliding] = useState(true);
  const containerRef = useCarouselControl({
    activeDot,
    slideTimer,
    isPlay,
    gap,

    setIsSlidingBottom,
    isSlidingBottom,

    isSlideLeft,
    setIsSlideLeft,
  });

  const scrollTimeoutRef = useRef(null);
  const isInteracting = useRef(false);
  const startDotRef = useRef(0);

  const handleInteractionStart = () => {
    isInteracting.current = true;
    if (!containerRef.current) return;
    const container = containerRef.current;

    startDotRef.current = container.scrollLeft;
    setIsPlay(false);
    setIsSlidingTop(false);
    setIsSlidingBottom(true);
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
    if (!isSlidingBottom) return;
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
      const activeDotTemp = Math.floor(computedActiveDot) - 2;

      setActiveDot(activeDotTemp);

      clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        setTimeout(() => {
          if (startDotRef.current === 0) return;
          if (startDotRef.current !== container.scrollLeft) {
            setIsPlay(false);
            setIsSlidingTop(false);
            setIsSlidingBottom(true);
            // console.log("not the same------ in amusement");
          }
        }, 250);

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

  // console.log(activeDot + " active dot outside");
  // console.log(activeDot + " active dot in amusement");

  return (
    <section className="mt-3">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        className="flex w-full snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto"
      >
        {arrayWithClones.map((id, index) => {
          const amusement = masterData[id];
          if (!amusement) return null;

          const GenreIcon = amusement.genre;
          const isWhiteBg = amusement.bgColor === "bg-[#FFFFFF]";

          const isOuterEdge =
            index === 0 || index === arrayWithClones.length - 1;

          return (
            <div
              key={`${id}-${index}`}
              data-clone={
                index < 3 || index >= arrayWithClones.length - 3
                  ? "true"
                  : "false"
              }
              className={`laptop-custom:w-[417px] laptop-custom:h-[234px] desktop-custom:w-[470px] card-base-styles desktop-custom:h-[264px] relative flex h-[254px] w-[188px] flex-shrink-0 ${amusement.bgColor || "bg-white"} ${!isOuterEdge ? "snap-center" : ""}`}
            >
              {GenreIcon === MusicIcon ? (
                <div className="flex w-full">
                  <div className="laptop-custom:flex-row laptop-custom:gap-5 laptop-custom:justify-start flex w-full flex-col items-center justify-center gap-2 px-4">
                    <div className="overflow-hidden rounded-lg">
                      <picture className="inset-0 -z-20">
                        {amusement.bgImage.sources.map((source, srcIndex) => (
                          <source
                            key={srcIndex}
                            media={source.media}
                            srcSet={source.srcSet}
                          />
                        ))}
                        <img
                          src={amusement.bgImage.fallback}
                          alt={amusement.bgImage.alt}
                          className="object-cover object-center"
                        />
                      </picture>
                    </div>
                    <div
                      className={`laptop-custom:text-sm laptop-custom:w-[150px] laptop-custom:text-left h-fit w-[130px] text-center text-xs font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] ${isWhiteBg ? "text-black" : "text-white"}`}
                    >
                      {amusement.title}
                    </div>
                  </div>
                  <div className="laptop-custom:justify-end laptop-custom:pr-4 absolute bottom-3 z-20 flex w-full justify-center whitespace-nowrap">
                    <GlobalButton
                      buttonTextLabel={amusement.buttonTextLabel}
                      buttonTextColor="text-black"
                      buttonTextSize="text-xs laptop-custom:text-sm font-light"
                      buttonBG={`${isWhiteBg ? "bg-black text-white" : "bg-background02 text-black"}`}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-black/25 via-transparent to-black/30" />
                  <picture className="inset-0 -z-20">
                    {amusement.bgImage.sources.map((source, srcIndex) => (
                      <source
                        key={srcIndex}
                        media={source.media}
                        srcSet={source.srcSet}
                      />
                    ))}
                    <img
                      src={amusement.bgImage.fallback}
                      alt={amusement.bgImage.alt}
                      className="object-cover object-center"
                    />
                  </picture>
                  <div className="laptop-custom:flex-row laptop-custom:justify-between absolute bottom-3 z-20 flex w-full flex-col items-center gap-2 px-4">
                    <div className="laptop-custom:text-sm laptop-custom:w-full laptop-custom:text-left h-fit w-[130px] text-center text-xs font-light text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                      {amusement.title}
                    </div>
                    <div className="whitespace-nowrap">
                      <GlobalButton
                        buttonTextLabel={amusement.buttonTextLabel}
                        buttonTextColor="text-black"
                        buttonTextSize="text-xs laptop-custom:text-sm font-light"
                        buttonBG="bg-background02"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="laptop-custom:justify-end absolute top-4 z-20 flex h-fit w-full justify-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                <div
                  className={`w-[76px] ${GenreIcon === FitnessIcon ? "laptop-custom:mr-8" : "laptop-custom:mr-4"} ${isWhiteBg ? "text-black" : "text-white"}`}
                >
                  <GenreIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
