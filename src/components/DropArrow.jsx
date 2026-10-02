import { useState, useRef } from "react";

export default function DropArrow() {
  const [isOpen, setIsOpen] = useState(false);

  // Gumawa ng refs para sa dalawang animate tags
  const expandAnimRef = useRef(null);
  const collapseAnimRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen) {
      // Kung bubuksan, i-trigger ang expand animation
      expandAnimRef.current?.beginElement();
    } else {
      // Kung isasarado, i-trigger ang collapse animation
      collapseAnimRef.current?.beginElement();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="tablet-custom:hidden flex flex-col items-center justify-center">
      {/* Button na nagpapakita ng SVG Icon */}
      <button
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center text-sm font-medium text-black"
      >
        {/* Ang iyong SVG na may Tailwind Classes */}
        <svg className="" width="11" height="6" viewBox="0 0 11 6">
          <polyline
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            fillRule="evenodd"
            points="10.075 0.675 5.5 5.323 0.925 0.675"
          >
            {/* Expand Animation */}
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
            {/* Collapse Animation */}
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

      {/* Placeholder content para makita kung bumubukas */}
      {isOpen && <div className=""></div>}
    </div>
  );
}
