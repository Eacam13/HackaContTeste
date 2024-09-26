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
    justifyContent: "center",
    borderColor: themes.colors.cyanBlue[400],
    backgroundColor: themes.colors.cyanBlue[500],
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 16,
    fontWeight: "bold",
    color: themes.colors.gray[50],
    textTransform: "uppercase",
  },
});
