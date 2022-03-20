// import React from "react";
// import { StyleSheet } from "react-native";
// import * as Yup from "yup";

// import {
//   AppForm as Form,
//   AppFormField as FormField,
//   AppFormPicker as Picker,
//   SubmitButton,
// } from "../components/form";
// import FormImagePicker from "../components/form/FormImagePicker";
// import Screen from "../components/screen";
// import { useEffect } from "react/cjs/react.production.min";
// // import useLocation from "../Hooks/useLocation";

// const validationSchema = Yup.object().shape({
//   title: Yup.string().required().min(1).label("Title"),
//   price: Yup.number().required().min(1).max(10000).label("Price"),
//   description: Yup.string().label("Description"),
//   category: Yup.object().required().nullable().label("Category"),
//   images: Yup.array().min(1, "Select an image"),
// });

// const categories = [
//   { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
//   { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
//   { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
// ];

// function ListingEditScreen() {
//   // const location = useLocation();
//   return (
//     <Screen style={styles.container}>
//       <Form
//         initialValues={{
//           title: "",
//           price: "",
//           description: "",
//           // category: null,
//           images: [],
//         }}
//         onSubmit={(values) => console.log(values)}
//         validationSchema={validationSchema}
//       >
//         <FormImagePicker name="images" />
//         <FormField maxLength={255} name="title" placeholder="Title" />
//         <FormField
//           keyboardType="numeric"
//           maxLength={8}
//           name="price"
//           placeholder="Price"
//           width={120}
//         />

//         {/*
//         still working on it
//         <Picker
//           items={categories}
//           name="category"
//           // numberOfColumns={3}
//           placeholder="Category"
//           // PickerItemComponent={CategoryPickerItem}
//           width="50%"
//         /> */}
//         <FormField
//           maxLength={255}
//           multiline
//           name="description"
//           numberOfLines={3}
//           placeholder="Description"
//         />
//         <SubmitButton title="Post" />
//       </Form>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
// });
// export default ListingEditScreen;
