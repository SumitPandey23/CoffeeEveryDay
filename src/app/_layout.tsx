import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack} from "expo-router";
import React from "react";
import MainLayout from "./main/index";

const _layout = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return isLoggedIn ? (
    <MainLayout />
  ) : (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
