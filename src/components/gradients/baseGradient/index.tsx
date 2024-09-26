import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { styles } from "./styles";
import { ViewProps } from "react-native";

type GradientProps = ViewProps & {
  children: ReactNode;
};

function BaseGradient({ children }: GradientProps) {
  return (
    <LinearGradient colors={["#050f15", "#172d3b"]} style={styles.container}>
      {children}
    </LinearGradient>
  );
}

export { BaseGradient };
