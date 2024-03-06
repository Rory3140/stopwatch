import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function Stopwatch() {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>00:00.00</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Start / Pause</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Reset</Text>
      </View>

      <View style={styles.lapTimesWrapper}>
        <View style={styles.lapTimesHeader}>
          <View>
            <Text style={styles.h2}>Lap Times:</Text>
          </View>
          <View style={[styles.button, styles.lapTimeButton]}>
            <Text style={styles.buttonText}>Lap</Text>
          </View>
        </View>
        <View style={styles.lapTimes}>
          <Text>00:00.00</Text>
          <Text>00:00.00</Text>
          <Text>00:00.00</Text>
          <Text>00:00.00</Text>
          <Text>00:00.00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 50,
  },

  timeContainer: {
    backgroundColor: "#f3f3f3",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },

  timeText: {
    fontSize: 50,
  },

  button: {
    margin: 20,
    backgroundColor: "#375C48",
    padding: 30,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
  },

  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },

  lapTimeButton: {
    width: "40%",
    padding: 10,
  },

  lapTimesWrapper: {
    flex: 1,
    margin: 30,
    width: "80%",
    backgroundColor: "#f3f3f3",
    padding: 10,
    borderRadius: 10,
  },

  lapTimesHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lapTimes: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
