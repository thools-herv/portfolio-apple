export default function GlobalButton({
  buttonTextLabel,
  buttonWidth = "w-fit",
  buttonBG = "bg-darkGreen ",
  buttonTextColor = "text-white",
  buttonBorder,
}) {
  return (
    <button
      className={`flex cursor-pointer ${buttonWidth} ${buttonBG} ${buttonTextColor} ${buttonBorder} mobile-landscape:px-[21px] mobile-landscape:py-[9px] items-center justify-center rounded-full px-[16px] py-[7px]`}
    >
      <p className="mobile-landscape:text-[17px] h-fit w-fit items-center text-sm">
        {buttonTextLabel}
      </p>
    </button>
  );
}
