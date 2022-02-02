import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "./AppText";
import ListingDetailsScreen from "../../Screens/ListingDetailsScreen";
import AppText from "./AppText";
function ListItem({ title }) {
  return (
    <View style={styles.container}>
      {/* <Image source={image} style={styles.image} /> */}
      {/* <View>
        <AppText>{Title}</AppText>
        <AppText>{subTitle}</AppText>
      </View> */}
      {/* <AppText>{title}</AppText> */}
      <Text>Hello</Text>
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
