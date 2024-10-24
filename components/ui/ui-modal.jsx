import { CrossIcon } from "./icons/cross-icon";
import { setFlag } from "../../pages/modal";

export function UiModal({ onClose }) {
  return (
    <div className="absolute rounded-[30px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 w-[1000px] h-[800px] shadow-2xl shadow-black p-8">
      <button onClick={onClose}>
        <CrossIcon className="absolute right-0 mx-8 h-5 w-5 hover:text-red-500 transition"></CrossIcon>
      </button>
      <div className="rounded-[30px] my-10 h-[650px] w-full bg-gray-600 text-white text-[40pt] font-bold">
        <div className="text-center">Модальное окно</div>
      </div>
    </div>
  );
}
