import { Back } from "../components/globalComponents/background";
import { Header } from "../components/globalComponents/header";
import { UiButton } from "../components/ui/ui-button";

export default function HomePage() {
  return (
    <Back>
      <Header>Mini Apps</Header>
      <UiButton
        onClick={() => {
          window.location.assign("http://localhost:3000/counter/");
        }}
        type="default"
        size="large"
      >
        Счётчик
      </UiButton>
      <UiButton
        onClick={() => {
          window.location.assign("http://localhost:3000/modal/");
        }}
        type="default"
        size="large"
      >
        Модальное окно
      </UiButton>
      <UiButton
        onClick={() => {
          window.location.assign("http://localhost:3000/calculator/");
        }}
        type="default"
        size="large"
      >
        Калькулятор
      </UiButton>
      <UiButton onClick={() => {}} type="default" size="large">
        Coming soon!
      </UiButton>
      <UiButton onClick={() => {}} type="default" size="large">
        Coming soon!
      </UiButton>
      <UiButton onClick={() => {}} type="default" size="large">
        Coming soon!
      </UiButton>{" "}
    </Back>
  );
}
