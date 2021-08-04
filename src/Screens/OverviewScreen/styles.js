import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "center",
  },
});

export default styles;
