import { StyleSheet, Platform } from "react-native";
import React from "react";
import colors from "./colors";
const Reusablestyles = StyleSheet.create({
  text: {
    fontSize: 18,

    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: " ",
      },
      android: {
        fontSize: 20,
      },
    }),
  },

  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default Reusablestyles;
