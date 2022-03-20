import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import colors from "../config/colors";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/form";
import FormImagePicker from "../components/form/FormImagePicker";
import Screen from "../components/screen";
import { useEffect } from "react/cjs/react.production.min";
import CategoryPickerItem from "../components/CategoryPickerItem";
// import useLocation from "../Hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Select an image"),
});

const categories = [
  { label: "Food", value: 1, backgroundColor: "red", icon: "food-apple" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "tshirt-v" },
  { label: "Toys", value: 3, backgroundColor: "blue", icon: "pinwheel" },
];

function ListingEditScreen() {
  // const location = useLocation();
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          address: "",
          description: "",
          // category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          // keyboardType="numeric"
          maxLength={8}
          name="Address"
          placeholder="Address"
          width="100%"
        />

        <Picker
          items={categories}
          // name="category"
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#DEDEDE",
  },
});
export default ListingEditScreen;
