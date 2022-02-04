import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Switch,
} from "react-native";
import ViewImageScreen from "./app/Screens/viewImageScreen";
import WelcomeScreen from "./app/Screens/welcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import MessageScreen from "./app/Screens/MessageScreen";
import Screen from "./app/components/screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/Screens/AccountScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";
import React, { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/Screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}
