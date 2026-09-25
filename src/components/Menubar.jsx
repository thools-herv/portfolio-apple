import { useState } from "react";

export default function Menubar() {
  // Isang state lang ang kailangan para malaman kung bukas o sara ang menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex h-12 w-12 items-center justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="-mt-[1px] flex h-[9px] w-full cursor-pointer flex-col items-center justify-between bg-transparent"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={`h-0.5 w-4 rounded-full bg-gray-500`} />

        <span className={`h-0.5 w-4 rounded-full bg-gray-500`} />
      </button>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`absolute h-0.5 w-6 rounded-full bg-black opacity-0`} />
        <div className={`h-0.5 w-6 rounded-full bg-blue-500 opacity-0`} />
      </div>
    </div>
  );
}
