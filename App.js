import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Switch,
  Button,
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
import React, { useState, useEffect } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/Screens/LoginScreen";
import ListingEditScreen from "./app/Screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import * as ImagePicker from "expo-image-picker";
import ImageInputList from "./app/components/ImageInputList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import navagationBackground from "./app/navigation/navagationBackground";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}
