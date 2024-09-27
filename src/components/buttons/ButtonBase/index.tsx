import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { themes } from "../../../styles/colors";
import { styles } from "./styles";

type InputBaseProps = TouchableOpacityProps & {
  title: string;
  iconName?: keyof typeof Ionicons.glyphMap;
};

export function ButtonBase({ title, iconName, ...rest }: InputBaseProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.title}>{title}</Text>
      {iconName && <Ionicons name={iconName} size={24} color={themes.colors.gray[100]} />}
    </TouchableOpacity>
  );
}
