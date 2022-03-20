import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingsScreen from "../Screens/ListingsScreen";
import ListingEditScreen from "../Screens/ListingEditScreen";
import AccountScreen from "../Screens/AccountScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#e91e63",
    }}
  >
    <Tab.Screen
      name="Listings"
      component={ListingsScreen}
      options={{
        tabBarLabel: "Listings",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="food-apple" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Add New Listing"
      component={ListingEditScreen}
      options={{
        tabBarLabel: "ADD Listing",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="package" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarLabel: "Account",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
