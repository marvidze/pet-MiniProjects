import { useState } from "react";
import { Back } from "../components/background";
import { Header } from "../components/header";
import { UiButton } from "../components/ui/ui-button";
import { UiModal } from "../components/ui/ui-modal";

export default function ModalPage() {
  const [flag, setFlag] = useState(false);
  return (
    <Back isButtonReturn={true}>
      <Header>Модальное окно</Header>
      {flag && (
        <UiModal
          onClose={() => {
            setFlag(false);
          }}
        />
      )}
      {!flag && (
        <div className="absolute bottom-[43%] right-[23.4%]">
          <UiButton
            type="default"
            size="large"
            onClick={() => {
              setFlag(true);
            }}
          >
            💫 Открыть модальное окно
          </UiButton>
        </div>
      )}
    </Back>
  );
}
