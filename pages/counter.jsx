import { useState } from "react";
import { Back } from "../components/background";
import { Header } from "../components/header";
import { UiButton } from "../components/ui/ui-button";

export default function CounterPage() {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <Back isButtonReturn={true}>
      <Header className>Счётчик</Header>
      <div>
        <div className="text-[#353535] font-bold text-[40pt] text-center my-20">
          {counter}
        </div>
        <div className="grid grid-cols-3 w-[70%] mx-auto">
          <UiButton type="countRed" size="mini" flex={true} onClick={plus}>
            +
          </UiButton>
          <UiButton type="countGray" size="mini" flex={true} onClick={reset}>
            сброс
          </UiButton>
          <UiButton type="countBlue" size="mini" flex={true} onClick={minus}>
            -
          </UiButton>
        </div>
      </div>
    </Back>
  );
}
