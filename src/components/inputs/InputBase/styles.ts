import { StyleSheet } from "react-native";
import { themes } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    borderColor: themes.colors.gray[400],
    backgroundColor: themes.colors.cyanBlue[800],
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
    color: themes.colors.gray[50],
  },
});
