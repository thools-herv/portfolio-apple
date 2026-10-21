import { useEffect, useRef, useState } from "react";

export default function RadioandPlayButton({
  totalDots,
  activeDot,
  setActiveDot,
  slideTimer,
  isPlay,
  setIsPlay,

  isPlayActive,
  setIsPlayActive,

  setIsSlidingTop,
  setIsSlidingBottom,
}) {
  const [tempActiveDot, setTempActiveDot] = useState(0);
  const currentProgressRef = useRef(0);

  useEffect(() => {
    if (!isPlay || totalDots <= 0) return;
    const progressTimer = setInterval(() => {
      currentProgressRef.current += 100;

      setIsSlidingTop(false);
      setIsSlidingBottom(false);

      if (currentProgressRef.current >= slideTimer) {
        setActiveDot((prev) => (prev + 1) % totalDots);

        currentProgressRef.current = 0;
      }
    }, 95);

    return () => clearInterval(progressTimer);
  }, [
    isPlay,
    totalDots,
    slideTimer,
    setActiveDot,
    setIsSlidingTop,
    setIsSlidingBottom,
  ]);

  const handleClickPlayPause = () => {
    if (isPlay) {
      setTempActiveDot(activeDot);
    } else {
      if (activeDot !== tempActiveDot) {
        currentProgressRef.current = 0;
      }
    }
    setIsPlay(!isPlay);
    setIsPlayActive(!isPlayActive);
  };

  return (
    <section className="flex flex-col items-center gap-2 px-2 py-4">
      <div className="flex w-full justify-center">
        <div className="mx-auto -mr-6.5 flex overflow-hidden">
          <div
            className={`flex max-w-[190px] items-center justify-baseline transition-all duration-700 ease-in-out ${activeDot === 4 && "-translate-x-6"} ${activeDot === 5 && "-translate-x-12.5"} ${activeDot > 5 && "-translate-x-12.5"}`}
          >
            {Array.from({ length: totalDots }).map((_, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setActiveDot(index);
                    currentProgressRef.current = 0;
                    setIsSlidingTop(false);
                    setIsSlidingBottom(false);
                    setIsPlay(false);
                  }}
                  className={`group flex h-5 w-auto min-w-6 flex-shrink-0 items-center justify-center px-2 ${activeDot === index ? "cursor-default" : " cursor-pointer"} `}
                >
                  <button
                    className={`relative h-2 overflow-hidden rounded-full transition-all duration-300 ${
                      activeDot === index
                        ? "bg-background05 w-8"
                        : "bg-background05 group-hover:bg-primary w-2 cursor-pointer"
                    } ${activeDot < 4 && index === 5 && "!h-1.5 !w-1.5"} ${activeDot < 4 && index > 5 && "!h-1 !w-1"} ${activeDot === 4 && index === 2 && "!h-1.5 !w-1.5"} ${activeDot === 4 && index === 1 && "!h-1 !w-1"} ${activeDot === 4 && index === 6 && "!h-1.5 !w-1.5"} ${activeDot === 4 && index > 6 && "!h-1 !w-1"} ${activeDot > 4 && index < 3 && "!h-1 !w-1"} ${activeDot > 4 && index === 3 && "!h-1.5 !w-1.5"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <span
                      key={index}
                      style={{
                        animationDuration:
                          activeDot === index ? `${slideTimer}ms` : "0ms",
                        animationPlayState: isPlay ? "running" : "paused",
                      }}
                      className={`bg-primary absolute top-0 left-0 h-full rounded-full ${
                        activeDot === index
                          ? "animate-[slide_linear_both] opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {/* play button ---------------------------------------- */}
        <div
          onClick={handleClickPlayPause}
          className="text-background05 ml-auto flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-gray-300 hover:text-black/80"
        >
          {isPlay ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className="mb-[5px] -ml-[4px]"
            >
              <path
                d="M9.30957 8.79199C9.30957 8.23971 9.75729 7.79199 10.3096 7.79199C10.8619 7.79199 11.3096 8.23971 11.3096 8.79199V16.792C11.3096 17.3443 10.8619 17.792 10.3096 17.792C9.75729 17.792 9.30957 17.3443 9.30957 16.792V8.79199Z"
                fill="currentColor"
              ></path>
              <path
                d="M14.3096 8.79199C14.3096 8.23971 14.7573 7.79199 15.3096 7.79199C15.8619 7.79199 16.3096 8.23971 16.3096 8.79199V16.792C16.3096 17.3443 15.8619 17.792 15.3096 17.792C14.7573 17.792 14.3096 17.3443 14.3096 16.792V8.79199Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className="mb-[5px] -ml-[4px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.75098 18.4801V7.48013L17.751 12.9801L9.75098 18.4801Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </section>
  );
}
