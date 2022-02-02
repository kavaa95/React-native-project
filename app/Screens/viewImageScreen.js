import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
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
    position: "absolute",
    right: 40,
    top: 30,
  },
  deleteIcon: {
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
