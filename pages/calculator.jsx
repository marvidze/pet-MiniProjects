import { Back } from "../components/globalComponents/background";
import { Header } from "../components/globalComponents/header";
import { UiCalculator } from "../components/ui/ui-calculator/ui-calculator";

export default function CaclulatorPage() {
  return (
    <Back isButtonReturn={true}>
      <Header>Калькулятор</Header>
      <UiCalculator />
    </Back>
  );
}
