import { StyleSheet } from "react-native";
import { STATUS_BAR_HEIGHT } from "../../src/helpers/getStatusBarHeight";
import { themes } from "../../src/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT(),
  },
  header: {
    flex: 1,
    minHeight: 56,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 27,
    textAlign: "center",
    marginHorizontal: 12,
    color: themes.colors.gray[100],
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
    color: themes.colors.gray[200],
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: themes.colors.gray[100],
  },
  keyboardScrollView: {
    paddingHorizontal: 16,
  },
});
