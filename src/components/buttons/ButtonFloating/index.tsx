import { Ionicons } from "@expo/vector-icons";
import { View, ViewProps, StyleSheet } from "react-native";
import { styles } from "./styles";

type ButtonFloatingProps = ViewProps & {
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  iconSize?: number;
};

export function ButtonFloating({ iconName, iconColor = "#FFF", iconSize = 24, style, ...rest }: ButtonFloatingProps) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </View>
  );
}
