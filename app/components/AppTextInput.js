import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Platform, TextInput } from "react-native";
import colors from "../config/colors";
import Reusablestyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={Reusablestyles.TextInput}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",

    padding: 15,
    marginVertical: 10,
  },
  //   textInput: {
  //     color: colors.dark,
  //     fontSize: 18,
  //     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  //   },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
