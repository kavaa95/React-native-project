import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 60,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 60,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
