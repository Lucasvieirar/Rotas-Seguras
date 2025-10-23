import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  map: {
    width: width,
    height: height,
  },
  mapMock: {
    width: width,
    height: height,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  mapMockText: {
    textAlign: "center",
    color: "#444",
    fontSize: 15,
    marginVertical: 5,
  },
  sosButton: {
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "#FF3B30",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  sosText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 2,
  },
});