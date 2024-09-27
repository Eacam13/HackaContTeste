import { StyleSheet } from "react-native";
import { themes } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 52,
    width: 52,
    padding: 12,
    borderWidth: 1,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderColor: themes.colors.cyanBlue[400],
    backgroundColor: themes.colors.cyanBlue[800],
  },
});
