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

export default function AppText({ children, style, ...otherProps }) {
  return (
    <View>
      <Text style={[Reusablestyles.text, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
}
