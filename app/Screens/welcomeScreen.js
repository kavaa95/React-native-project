import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      // source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.tagline}>Text hereeeeee</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  RegisterButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: "80%",
    height: "50%",
  },
  logoContainer: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
