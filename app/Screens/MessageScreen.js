import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "../components/ListItem";

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

function MessageScreen(props) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString}
      renderItem={({ item }) => (
        <ListItem
          title={items.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
}

export default MessageScreen;