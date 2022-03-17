import React, { useState } from "react";
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
import Screen from "../components/screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const InitialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad, expedita nobis explicabo eaque eos tempore incidunt odio dolo",
    image: require("../assets/favicon.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/favicon.png"),
  },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(InitialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => setMessages(InitialMessages)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
