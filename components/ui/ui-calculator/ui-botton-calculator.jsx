import clsx from "clsx";

export function UiButtonCalculator({ children, onClick, color, size }) {
  return (
    <div
      className={clsx(
        color == "cyan"
          ? "bg-[#58c1e1] hover:bg-[#93d1e4]"
          : color == "darkCyan"
          ? "bg-[#31374f] hover:bg-[#545869]"
          : "",
        size == "big" ? "h-[140px]" : "h-[65px]",
        "w-[85px]  rounded-[10px] transition"
      )}
    >
      <button onClick={onClick} className="w-full h-full">
        <div
          className={clsx(
            size == "big" ? "my-9 text-[30pt]" : "my-2 text-[25pt]",
            "w-[85px]  rounded-[10px]",
            "w-full h-full mx-auto  text-white  font-mono font-semibold"
          )}
        >
          {children}
        </div>
      </button>
    </div>
  );
}
