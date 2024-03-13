import React from "react";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [pauseTime, setPauseTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const [lapTimes, setLapTimes] = useState([]);
  const [running, setRunning] = useState(false);

  function startPause() {
    console.log("Start/Pause button pressed");
    if (!running) {
      if (startTime == null) {
        setStartTime(Date.now());
      }
      if (pauseTime != null) {
        setStartTime((prevStartTime) => prevStartTime + Date.now() - pauseTime);
      }
      setNow(Date.now());

      intervalRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    } else {
      setPauseTime(Date.now());
      clearInterval(intervalRef.current);
    }
    setRunning(!running);
  }

  function reset() {
    console.log("Reset button pressed");
    setStartTime(null);
    setPauseTime(null);
    clearInterval(intervalRef.current);
    setRunning(false);
    setLapTimes([]);
  }

  function lap() {
    console.log("Lap button pressed");
    if (running) {
      setLapTimes((prevLapTimes) => [...prevLapTimes, secondsPassed]);
      console.log("Lap time: ", secondsPassed);
    }
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{secondsPassed.toFixed(3)}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPressIn={startPause}>
        {running ? (
          <Text style={styles.buttonText}>Pause</Text>
        ) : (
          <Text style={styles.buttonText}>Start</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPressIn={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <View style={styles.lapTimesWrapper}>
        <View style={styles.lapTimesHeader}>
          <View>
            <Text style={styles.h2}>Lap Times:</Text>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.lapTimeButton]}
            onPressIn={lap}
          >
            <Text style={styles.buttonText}>Lap</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.lapTimes}>
            {lapTimes
              .slice()
              .reverse()
              .map((lapTime, index) => (
                <View style={styles.lapTimesRow} key={index}>
                  <Text style={styles.h3}>{lapTimes.length - index}</Text>
                  <Text style={styles.h3}>{lapTime.toFixed(3)}</Text>
                </View>
              ))}
          </View>
        </ScrollView>
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
    margin: 10,
    backgroundColor: "#375C48",
    padding: 30,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
  },

  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },

  h3: {
    fontSize: 18,
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

  lapTimesRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
