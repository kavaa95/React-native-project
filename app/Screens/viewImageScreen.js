import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>

      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 80,
    height: 80,
    backgroundColor: "blue",
    position: "absolute",
    right: 40,
    top: 30,
  },
  deleteIcon: {
    width: 80,
    height: 80,
    backgroundColor: "#fc5c65",
    position: "absolute",
    left: 40,
    top: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
