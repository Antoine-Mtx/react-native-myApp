import { useCounterValue } from "../provider/GameProvider";
import { Text } from "react-native";
export function SecondTab() {
  const counter = useCounterValue();
  return <Text>{counter}</Text>;
}
