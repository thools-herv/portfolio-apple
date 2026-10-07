import GlobalButton from "@/components/GlobalButton";
import { ArcadeIcon, FitnessIcon, MusicIcon } from "@/Icons";

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

export default function EntertainmentSectionAmusement() {
  const amusements = [2, 6, 1, 10, 3, 4, 8, 7, 9];
  const arrayWithClones = [
    ...amusements.slice(-2),
    ...amusements,
    ...amusements.slice(0, 2),
  ];
  return (
    <section className="mt-3">
      <div className="flex w-full snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto scroll-smooth">
        {arrayWithClones.map((id, index) => {
          const amusement = masterData[id];
          if (!amusement) return null;

          const GenreIcon = amusement.genre;
          const isWhiteBg = amusement.bgColor === "bg-[#FFFFFF]";

          const isCloneAhead = index < 2;
          const isCloneBehind = index >= amusements.length + 2;
          const isClone = isCloneAhead || isCloneBehind;

          return (
            <div
              key={`${id}-${index}`}
              className={`laptop-custom:w-[417px] laptop-custom:h-[234px] desktop-custom:w-[470px] desktop-custom:h-[264px] relative flex h-[254px] w-[188px] flex-shrink-0 ${amusement.bgColor || "bg-white"} ${
                isClone ? "" : "snap-center"
              }`}
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
