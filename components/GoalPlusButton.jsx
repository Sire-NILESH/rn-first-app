import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const GoalPlusButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.setShowModal}
        android_ripple={{ color: "#fed7aa" }}
      >
        {/* <Text style={styles.container__text}>+</Text> */}
        <View style={styles.container__icon}>
          <Ionicons name="md-add" size={32} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flexDirection: "row",
    height: 64,
    width: 64,
    borderRadius: 100,
    zIndex: 10,
    position: "absolute",
    bottom: 100,
    right: 50,
    backgroundColor: "orange",

    // SHADOW
    shadowColor: "#777",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 5,
    // -SHADOW-
  },
  container__icon: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    border: 5,
    borderColor: "white",
    borderRadius: 100,
  },
});

export default GoalPlusButton;
