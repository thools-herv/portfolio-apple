export default function GlobalButton({
  buttonTextLabel,

  buttonBG = "bg-darkGreen ",
  buttonTextColor = "text-white",
  buttonBorder,
  buttonTextSize,
  buttonPY = "py-[.5em]",
  buttonPX = "px-[1.2em]",
}) {
  return (
    <button
      className={`flex cursor-pointer ${buttonBG} ${buttonTextColor} ${buttonBorder} items-center justify-center rounded-full`}
    >
      <p
        className={`h-fit w-fit items-center ${buttonTextSize} ${buttonPX} ${buttonPY}`}
      >
        {buttonTextLabel}
      </p>
    </button>
  );
}
