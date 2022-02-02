import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AppText({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <AntDesign name="mail" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "tomato",
    fontSize: 38,
    fontFamily: "Roboto",
  },
});
