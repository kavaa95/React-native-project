import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "./AppText/AppText";
import ListingDetailsScreen from "../Screens/ListingDetailsScreen";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});

export default ListItem;
