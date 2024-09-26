import { Ionicons } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";
import { themes } from "../../../styles/colors";
import { styles } from "./styles";

type InputBaseProps = TextInputProps & {
  iconName?: keyof typeof Ionicons.glyphMap;
  onclose?: () => void;
};

export function InputBase({ iconName, onclose, ...rest }: InputBaseProps) {
  return (
    <View style={styles.container}>
      {iconName && <Ionicons name={iconName} size={24} color={themes.colors.gray[100]} />}
      <TextInput placeholderTextColor={themes.colors.gray[200]} style={styles.input} {...rest} />
      {onclose && <Ionicons name="close" size={24} color={themes.colors.gray[100]} onPress={onclose} />}
    </View>
  );
}
