import { Back } from "../components/background";
import { Header } from "../components/header";
import { UiCalculator } from "../components/ui/ui-calculator/ui-calculator";

export default function CaclulatorPage() {
  return (
    <Back isButtonReturn={true}>
      <Header>Калькулятор</Header>
      <UiCalculator />
    </Back>
  );
}
