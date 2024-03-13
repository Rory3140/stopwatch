import React from "react";
import { StatusBar } from "react-native";
import Stopwatch from "./src/Stopwatch";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stopwatch />
    </>
  );
}
