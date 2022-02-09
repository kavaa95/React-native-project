import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { Component, useState } from "react";

import {
  View,
  StyleSheet,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Fragment,
  Button,
  FlatList,
  numberOfColumns,
} from "react-native";

import colors from "../config/colors";
import Reusablestyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./screen";

function AppPicker({
  icon,
  placeholder,
  items,
  numberOfColumns = 1,
  width = "100%",
  selectedItem,
  onSelectedItem,
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}> {placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.medium}
            style={styles.chevrons}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,

    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
    fontSize: 16,
  },
  chevrons: {
    marginLeft: "20%",
  },
});

export default AppPicker;
