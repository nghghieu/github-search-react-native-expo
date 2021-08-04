import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
  },
  containerIcon: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  dropdown: {
    height: 60,
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#3c444c",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 15,
    color: "#fff",
  },
  submit: {
    position: "absolute",
    top: 10,
    right: 25,
  },
});

export default styles;
