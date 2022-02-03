import React from "react";
import Screen from "../components/screen";
import ListItem from "./ListItem";

function AccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title="Alex Kavanagh"
        subTitle="Kavaa@farmingdale.edu"
        image={require("../assets/mosh.jpg")}
      />
    </Screen>
  );
}

export default AccountScreen;
