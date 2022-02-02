import React from "react";
import { View, Image, StyleSheet } from "react-native";

function ListingDetailsScreen(props) {
  return (
    <View source={require("../assets/jacket.jpg")} style={styles.image}></View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});

export default ListingDetailsScreen;
