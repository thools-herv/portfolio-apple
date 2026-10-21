import RadioandPlayButton from "@/components/RadioandPlayButton";
import EntertainmentSectionAmusement from "./EntertainmentSectionAmusement";
import EntertainmentSectionTvShow from "./EntertainmentSectionTvShow";
import { useState } from "react";
import { useCarouselControl } from "@/components/CarouselControl";

export default function HomepageEntertaimentSection() {
  const [activeDot, setActiveDot] = useState(0);
  const [totalDots, setTotalDots] = useState(0);

  const [isPlay, setIsPlay] = useState(true);
  const [isPlayActive, setIsPlayActive] = useState(true);

  const [isSlidingTop, setIsSlidingTop] = useState(true);
  const [isSlidingBottom, setIsSlidingBottom] = useState(true);

  const [isSlideLeft, setIsSlideLeft] = useState(false);

  const slideTimer = 3000;
  const gap = 12;

  useCarouselControl({
    activeDot,
    isSlidingTop,
    isSlidingBottom,
    slideTimer,
    isPlay,
    gap,
  });

  return (
    <section>
      <div className="bg-background02 mt-3">
        <h2 className="laptop-custom:text-[56px] laptop-custom:pb-[26px] laptop-custom:pt-14 pt-9 pb-[17px] text-center text-[32px] leading-[1.071] font-bold">
          Endless entertainment.
        </h2>
      </div>
      <EntertainmentSectionTvShow
        onGetTotalItems={setTotalDots}
        slideTimer={slideTimer}
        activeDot={activeDot}
        setActiveDot={setActiveDot}

        isPlay={isPlay}
        setIsPlay={setIsPlay}

        isPlayActive={isPlayActive}
        setIsPlayActive={setIsPlayActive}

        isSlidingTop={isSlidingTop}
        setIsSlidingTop={setIsSlidingTop}

        isSlidingBottom={isSlidingBottom}
        setIsSlidingBottom={setIsSlidingBottom}

        isSlideLeft={isSlideLeft}
        setIsSlideLeft={setIsSlideLeft}

        gap={gap}
      />
      <EntertainmentSectionAmusement
        onGetTotalItems={setTotalDots}
        slideTimer={slideTimer}
        activeDot={activeDot}
        setActiveDot={setActiveDot}

        isPlay={isPlay}
        setIsPlay={setIsPlay}

        isPlayActive={isPlayActive}
        setIsPlayActive={setIsPlayActive}

        setIsSlidingTop={setIsSlidingTop}

        isSlidingBottom={isSlidingBottom}
        setIsSlidingBottom={setIsSlidingBottom}

        isSlideLeft={isSlideLeft}
        setIsSlideLeft={setIsSlideLeft}

        gap={gap}
      />
      <RadioandPlayButton
        totalDots={totalDots}
        slideTimer={slideTimer}
        activeDot={activeDot}
        setActiveDot={setActiveDot}

        isPlay={isPlay}
        setIsPlay={setIsPlay}

        isPlayActive={isPlayActive}
        setIsPlayActive={setIsPlayActive}

        isSlidingTop={isSlidingTop}
        setIsSlidingTop={setIsSlidingTop}

        isSlidingBottom={isSlidingBottom}
        setIsSlidingBottom={setIsSlidingBottom}
      />
    </section>
  );
}
