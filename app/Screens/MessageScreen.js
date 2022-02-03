import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/screen";
import ListItemSeperator from "../components/ListItemSeperator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessageScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
