import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 30,
      },
    }),
  },
});

export default styles;
