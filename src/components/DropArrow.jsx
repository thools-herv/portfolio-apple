import { useEffect, useRef } from "react";

export default function DropArrow({ activeElement }) {
  const expandAnimRef = useRef(null);
  const collapseAnimRef = useRef(null);

  useEffect(() => {
    if (activeElement) {
      expandAnimRef.current?.beginElement();
    } else {
      collapseAnimRef.current?.beginElement();
    }
  }, [activeElement]);

  return (
    <div className="tablet-custom:hidden flex flex-col items-center justify-center">
      <button className="flex cursor-pointer items-center text-sm font-medium text-black">
        <svg className="" width="11" height="6" viewBox="0 0 11 6">
          <polyline
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            fillRule="evenodd"
            points="10.075 0.675 5.5 5.323 0.925 0.675"
          >
            <animate
              ref={expandAnimRef}
              attributeName="points"
              values="10.075 0.675 5.5 5.323 0.925 0.675; 10.075 3 5.5 3 0.925 3; 10.075 5.325 5.5 0.676 0.925 5.325"
              dur="320ms"
              begin="indefinite"
              fill="freeze"
              keyTimes="0; 0.5; 1"
              calcMode="spline"
              keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
            />

            <animate
              ref={collapseAnimRef}
              attributeName="points"
              values="10.075 5.325 5.5 0.676 0.925 5.325; 10.075 3 5.5 3 0.925 3; 10.075 0.675 5.5 5.323 0.925 0.675"
              dur="320ms"
              begin="indefinite"
              fill="freeze"
              keyTimes="0; 0.5; 1"
              calcMode="spline"
              keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
            />
          </polyline>
        </svg>
      </button>
    </div>
  );
}
