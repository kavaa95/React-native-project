import React, { useState } from "react";
import { StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/screen";
import { Formik } from "formik";
import AppText from "../components/AppText";
import * as Yup from "yup";
import ErrorMessage from "../components/form/ErrorMessage";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
// import AppFormField from "../components/form/AppFormField";
// import SubmitButton from "../components/form/SubmitButton";
// import AppForm from "../components/form/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/favicon.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="Password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",

    marginBottom: 20,
  },
  container: {
    padding: 15,
    justifyContent: "center",
  },
});

export default LoginScreen;
