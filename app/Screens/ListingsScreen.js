import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/screen";
import colors from "../config/colors";

const Listings = [
  {
    id: 1,
    title: "Lorem upsum",
    address: "3120 Ditmars Blvd, Queens, NY 11105",
    image: require("../assets/donation1.jpg"),
  },
  {
    id: 2,
    title: "Lorem upsum",
    address: "3120 Ditmars Blvd, Queens, NY 11105",
    image: require("../assets/donation2.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.address}
            // subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
