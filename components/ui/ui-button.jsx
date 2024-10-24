import clsx from "clsx";

export function UiButton({ children, type, className, size, onClick, flex }) {
  return (
    <div
      className={clsx(
        "mx-auto rounded-[20px] text-[#5f5f5f] font-bold transition my-10",
        size == "medium"
          ? "h-14 w-[200px] text-xl"
          : size == "large"
          ? "h-20 w-[400px] text-2xl"
          : size == "mini"
          ? "h-20 w-[150px] text-2xl"
          : "",
        flex ? "flex" : ""
      )}
    >
      <button
        onClick={onClick}
        className={clsx(
          "size-full ",
          className,
          type == "default"
            ? "border-[#5f5f5f] border-[1px] hover:bg-[#555555] hover:text-white transition rounded-[20px]"
            : type == "countRed"
            ? "active:bg-red-800 active:border-red-800 bg-red-500 hover:bg-red-400 text-white text-[50pt] pb-5 font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            : type == "countGray"
            ? "active:bg-gray-800 active:border-gray-800 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
            : type == "countBlue"
            ? "active:bg-blue-800 active:border-blue-800 bg-blue-500 hover:bg-blue-400 text-white text-[50pt] font-bold py-2 pb-5 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            : ""
        )}
      >
        {children}
      </button>
    </div>
  );
}
