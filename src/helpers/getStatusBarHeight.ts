import { Platform, StatusBar } from "react-native";

const STATUS_BAR_HEIGHT = (): number => {
  let height = 28; // Valor padrão caso não haja valor definido

  if (Platform.OS === "ios") {
    height = StatusBar.currentHeight || 20; // iOS status bar height (padrão de 20)
  } else if (Platform.OS === "android") {
    height = StatusBar.currentHeight || 0 + 10; // Android status bar height
  }

  return height;
};

export { STATUS_BAR_HEIGHT };
