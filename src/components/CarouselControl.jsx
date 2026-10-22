// import { useRef, useEffect, useState } from "react";

// export function useCarouselControl({
//   activeDot,
//   isSlidingTop,
//   isSlidingBottom,
//   slideTimer,
//   isPlay,
//   gap,

//   isSlideLeft,
//   setIsSlideLeft,
// }) {
//   const containerRef = useRef(null);
//   const scrollTimeoutRef = useRef(null);

//   const [lastSlide, setLastSlide] = useState(false);

//   // first load ----------------------------------------------
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!containerRef.current) return;
//       const container = containerRef.current;
//       const firstRealCard = Array.from(container.children).find(
//         (child) => child.dataset.clone === "false",
//       );

//       if (firstRealCard) {
//         const containerWidth = container.offsetWidth;
//         const cardWidth = firstRealCard.offsetWidth;
//         const cardLeft = firstRealCard.offsetLeft;
//         const targetScrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;

//         container.scrollTo({ left: targetScrollLeft, behavior: "auto" });
//       }
//     }, 150);

//     return () => clearTimeout(timer);
//   }, []);

//   // dot -----------------------------------------------
//   useEffect(() => {
//     if (isSlidingTop) return;
//     if (isSlidingBottom) return;

//     if (!containerRef.current) return;
//     const container = containerRef.current;

//     const realCards = Array.from(container.children).filter(
//       (child) => child.dataset.clone === "false",
//     );

//     const targetCard = realCards[activeDot];

//     if (targetCard) {
//       const containerWidth = container.offsetWidth;
//       const cardWidth = targetCard.offsetWidth;
//       const cardLeft = targetCard.offsetLeft;

//       const cardToMove = cardWidth + gap;

//       const targetScrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;

//       if (activeDot === realCards.length - 1) {
//         if (!isPlay) {
//           if (!isSlideLeft) {
//             if (activeDot > 0) {
//               container.scrollTo({
//                 left: targetScrollLeft,
//                 behavior: "smooth",
//               });

//               setTimeout(() => {
//                 setLastSlide(true);
//               }, 100);
//             }
//           } else {
//             container.scrollTo({
//               left: cardToMove,
//               behavior: "smooth",
//             });

//             setTimeout(() => {
//               container.scrollTo({
//                 left: targetScrollLeft,
//                 behavior: "auto",
//               });
//               setLastSlide(false);
//               setIsSlideLeft(false);
//             }, slideTimer / 4);
//           }

//           return;
//         }

//         clearTimeout(scrollTimeoutRef.current);

//         scrollTimeoutRef.current = setTimeout(() => {
//           container.scrollTo({
//             left: targetScrollLeft + cardToMove,
//             behavior: "smooth",
//           });

//           setTimeout(() => {
//             const firstcontainerWidth = container.offsetWidth;
//             const firstcardWidth = realCards[0].offsetWidth;
//             const firstcardLeft = realCards[0].offsetLeft;

//             const firstargetScrollLeft =
//               firstcardLeft - firstcontainerWidth / 2 + firstcardWidth / 2;

//             container.scrollTo({
//               left: firstargetScrollLeft,
//               behavior: "auto",
//             });
//           }, slideTimer / 2);
//         }, slideTimer);
//       }

//       if (isPlay) {
//         if (activeDot > 0) {
//           container.scrollTo({
//             left: targetScrollLeft,
//             behavior: "smooth",
//           });
//         }
//       } else {
//         container.scrollTo({
//           left: targetScrollLeft,
//           behavior: "smooth",
//         });

//         if (activeDot === 0 && lastSlide === true) {
//           setIsSlideLeft(false);
//           container.scrollTo({
//             left: targetScrollLeft + cardToMove * realCards.length,
//             behavior: "smooth",
//           });

//           setTimeout(() => {
//             container.scrollTo({
//               left: targetScrollLeft,
//               behavior: "auto",
//             });
//             setLastSlide(false);
//           }, 150);
//         }
//       }
//     }
//   }, [
//     activeDot,
//     isSlidingTop,
//     isSlidingBottom,
//     slideTimer,
//     isPlay,
//     gap,
//     lastSlide,

//     isSlideLeft,
//     setIsSlideLeft,
//   ]);

//   return containerRef;
// }

import { useRef, useEffect, useState } from "react";

export function useCarouselControl({
  activeDot,
  isSlidingTop,
  isSlidingBottom,
  slideTimer,
  isPlay,
  gap,
  isSlideLeft,
  setIsSlideLeft,
}) {
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const [lastSlide, setLastSlide] = useState(false);

  const getCenterScrollLeft = (container, card) => {
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft = card.offsetLeft;
    return cardLeft - containerWidth / 2 + cardWidth / 2;
  };

  // 1. First Load Setup ----------------------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      const firstRealCard = Array.from(container.children).find(
        (child) => child.dataset.clone === "false",
      );

      if (firstRealCard) {
        const targetScrollLeft = getCenterScrollLeft(container, firstRealCard);
        container.scrollTo({ left: targetScrollLeft, behavior: "auto" });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  // 2. Dot and Slide Logic -----------------------------------------------
  useEffect(() => {
    if (isSlidingTop || isSlidingBottom) return;

    const container = containerRef.current;
    if (!container) return;

    const realCards = Array.from(container.children).filter(
      (child) => child.dataset.clone === "false",
    );

    const targetCard = realCards[activeDot];
    if (!targetCard) return;

    const cardToMove = targetCard.offsetWidth + gap;
    const targetScrollLeft = getCenterScrollLeft(container, targetCard);

    // Huling Slide Logic (activeDot === realCards.length - 1)
    if (activeDot === realCards.length - 1) {
      if (!isPlay) {
        if (!isSlideLeft) {
          if (activeDot > 0) {
            container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
            setTimeout(() => setLastSlide(true), 100);
          }
        } else {
          container.scrollTo({ left: cardToMove, behavior: "smooth" });
          setTimeout(() => {
            container.scrollTo({ left: targetScrollLeft, behavior: "auto" });
            setLastSlide(false);
            setIsSlideLeft(false);
          }, slideTimer / 4);
        }
        return;
      }

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        container.scrollTo({
          left: targetScrollLeft + cardToMove,
          behavior: "smooth",
        });

        setTimeout(() => {
          if (realCards[0]) {
            const firstTargetScroll = getCenterScrollLeft(
              container,
              realCards[0],
            );
            container.scrollTo({ left: firstTargetScroll, behavior: "auto" });
          }
        }, slideTimer / 2);
      }, slideTimer);
    }

    if (isPlay) {
      if (activeDot > 0) {
        container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
      }
    } else {
      container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });

      if (activeDot === 0 && lastSlide) {
        setIsSlideLeft(false);
        container.scrollTo({
          left: targetScrollLeft + cardToMove * realCards.length,
          behavior: "smooth",
        });

        setTimeout(() => {
          container.scrollTo({ left: targetScrollLeft, behavior: "auto" });
          setLastSlide(false);
        }, 250);
      }
    }
  }, [
    activeDot,
    isSlidingTop,
    isSlidingBottom,
    slideTimer,
    isPlay,
    gap,
    lastSlide,
    isSlideLeft,
    setIsSlideLeft,
  ]);

  return containerRef;
}
