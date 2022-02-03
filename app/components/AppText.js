import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import Reusablestyles from "../config/styles";
import { AntDesign } from "@expo/vector-icons";

export default function AppText({ children, style }) {
  return (
    <View style={styles.container}>
      <Text style={[Reusablestyles.text, style]}>{children}</Text>
    </View>
  );
}
