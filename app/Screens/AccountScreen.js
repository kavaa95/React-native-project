import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Alex Kavanagh"
          subTitle="Kavaa@farmingdale.edu"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => <ListItem title={item.title} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
