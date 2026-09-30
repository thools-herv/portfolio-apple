import GlobalButton from "@/components/GlobalButton";
import { BsDot } from "react-icons/bs";

export default function EntertainmentSectionTvShow() {
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
  ];

  const first_tvShow = tvShows[0];
  const last_tvShow = tvShows[tvShows.length - 1];

  // console.log(first_tvShow);
  // console.log(last_tvShow);

  return (
    <section className="">
      <div className="flex w-full snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto scroll-smooth">
        {/* clone last item ---------------------------------- */}
        <div className="relative flex-shrink-0">
          {last_tvShow && (
            <div key={tvShows.id}>
              <picture className="inset-0 -z-10">
                {last_tvShow.bgImage.sources.map((source, index) => (
                  <source
                    key={index}
                    media={source.media}
                    srcSet={source.srcSet}
                  />
                ))}
                <img
                  src={last_tvShow.bgImage.fallback}
                  alt={last_tvShow.bgImage.alt}
                  className="h-auto w-auto object-cover object-center"
                />
              </picture>
              <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2">
                <img
                  src="/tvshow/apple_tv_small.png"
                  alt="apple tv icon"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute top-14 left-0 z-20 flex h-auto w-full justify-center">
                <img
                  src={last_tvShow.title}
                  alt={last_tvShow.alt}
                  className="object-cover object-center"
                />
              </div>

              <div className="absolute bottom-8 left-0 z-20 flex w-full flex-col items-center">
                <p className="text-center text-white">{last_tvShow.genre}</p>
                <p className="mb-4 text-center font-light text-white">
                  {last_tvShow.description}
                </p>

                <GlobalButton
                  buttonTextLabel="Stream now"
                  buttonBG="bg-white"
                  buttonTextColor="text-black"
                />
              </div>
            </div>
          )}
        </div>
        {/* clone last item ---------------------------------- */}

        {tvShows.map((show) => (
          <div key={show.id} className="relative flex-shrink-0 snap-center">
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
                    buttonTextsize="text-[14px] laptop-custom:text-[17px] "
                  />
                </div>
              )}
              {show.id === 3 && (
                <div className="whitespace-nowrap">
                  <GlobalButton
                    buttonTextLabel="F1 on Apple TV"
                    buttonBG="bg-white"
                    buttonTextColor="text-black"
                  />
                </div>
              )}
              {show.id === 5 && (
                <div className="whitespace-nowrap">
                  <GlobalButton
                    buttonTextLabel="MLS on Apple TV"
                    buttonBG="bg-white"
                    buttonTextColor="text-black"
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* clone first item --------------------------------- */}
        <div className="relative flex-shrink-0">
          {first_tvShow && (
            <div key={tvShows.id}>
              <picture className="inset-0 -z-10">
                {first_tvShow.bgImage.sources.map((source, index) => (
                  <source
                    key={index}
                    media={source.media}
                    srcSet={source.srcSet}
                  />
                ))}
                <img
                  src={first_tvShow.bgImage.fallback}
                  alt={first_tvShow.bgImage.alt}
                  className="h-auto w-auto object-cover object-center"
                />
              </picture>
              <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2">
                <img
                  src="/tvshow/apple_tv_small.png"
                  alt="apple tv icon"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute top-14 left-0 z-20 flex h-auto w-full justify-center">
                <img
                  src={first_tvShow.title}
                  alt={first_tvShow.alt}
                  className="object-cover object-center"
                />
              </div>

              <div className="absolute bottom-8 left-0 z-20 flex w-full flex-col items-center">
                <p className="text-center text-white">{first_tvShow.genre}</p>
                <p className="mb-4 text-center font-light text-white">
                  {first_tvShow.description}
                </p>

                <GlobalButton
                  buttonTextLabel="Stream now"
                  buttonBG="bg-white"
                  buttonTextColor="text-black"
                />
              </div>
            </div>
          )}
        </div>
        {/* clone first item --------------------------------- */}
      </div>
    </section>
  );
}

//       tvIcon: "/tvshow/apple_tv_small.png",
