import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 2,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 20,
    marginRight: 30,
  },
  fullname: {
    fontSize: 26,
    fontWeight: "bold",
  },
  nickname: {
    color: "#586069",
    fontSize: 20,
  },
  icon: {
    marginRight: 2,
  },
  bottomContainer: {
    marginTop: 20,
  },
  bioText: {
    fontSize: 16,
    marginBottom: 5,
  },
  linkWebsite: {
    flexDirection: "row",
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  count: {
    fontWeight: "bold",
  },
  dot: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: "black",
    marginHorizontal: 5,
  },
  buttonFollow: {
    backgroundColor: "#fafbfc",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonFollowText: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  achivementContainer: {
    marginVertical: 30,
  },
  achievementLogoContainer: {
    flexDirection: "row",
  },
  achievementText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  achivementLogo: {
    width: 64,
    height: 75,
  },
  overviewText: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
  },
  overviewTextActive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    borderBottomColor: "#f9826c",
    borderBottomWidth: 2,
  },
});

export default styles;
