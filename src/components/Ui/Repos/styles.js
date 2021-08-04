import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    flex: 1,
  },
  itemContainer: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e1e4e8",
    marginBottom: 16,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#f1e05a",
    marginRight: 5,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  typeItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  titleRepo: {
    marginLeft: 10,
    color: "#0366d6",
    fontWeight: "bold",
  },
  description: {
    marginVertical: 8,
  },
  icon: {
    marginRight: 5,
  },
});

export default styles;
