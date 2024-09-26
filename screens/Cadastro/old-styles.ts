import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  roundedHeader: {
    backgroundColor: "#1E90FF",
    width: width,
    height: 150,
    borderBottomLeftRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContent: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    fontSize: 18,
    color: "#fff",
  },
  iconButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#e5e5e5",
  },
  icon: {
    fontSize: 16,
    color: "#000",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 40,
  },
  title2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 40,
    marginBottom: 16,
  },
  form: {
    flex: 1,
    backgroundColor: "#001a35",
    padding: 20,
    borderRadius: 20,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  input: {
    backgroundColor: "#1C2C44",
    color: "#fff",
    padding: 15,
    marginBottom: 35,
    borderRadius: 10,
  },
  signUpButton: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 70,
  },
  signUpButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
