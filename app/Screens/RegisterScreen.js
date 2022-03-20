import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/screen";

import { AppForm, AppFormField, SubmitButton } from "../components/form";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <AppForm
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        autoCorrect={false}
        icon="account"
        name="name"
        placeholder="Name"
      />
      <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        name="email"
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        name="password"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <SubmitButton title="Register" />
    </AppForm>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: "60%",
    height: "33%",
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default RegisterScreen;
