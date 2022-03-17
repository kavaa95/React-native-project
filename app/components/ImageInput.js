import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ image, onChangeImage }) {
  const handlePress = () => {
    if (!image) pickImage();
    else
      Alert.alert("Delete", "DELETE FOREVER?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No", onPress: () => onChangeImage(null) },
      ]);
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    //console.log(result);

    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!image && <MaterialCommunityIcons name="camera" size={40} />}
        {image && <Image source={{ uri: image }} style={styles.images} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: "center",
    overflow: "hidden",
  },
  images: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
