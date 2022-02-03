import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import ViewImageScreen from "./app/Screens/viewImageScreen";
import WelcomeScreen from "./app/Screens/welcomeScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import MessageScreen from "./app/Screens/MessageScreen";
import Screen from "./app/components/screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/Screens/AccountScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}
