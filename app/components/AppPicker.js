import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Platform, TextInput } from "react-native";
import colors from "../config/colors";
import Reusablestyles from "../config/styles";
import AppText from "./AppText";
function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <AppText>{placeholder}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
