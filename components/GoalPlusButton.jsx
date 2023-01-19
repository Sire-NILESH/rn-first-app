import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const GoalPlusButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.setShowModal}
        android_ripple={{ color: "#fed7aa" }}
      >
        <Text style={styles.container__text}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  container__text: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    fontSize: 36,
    fontWeight: "300",
    borderRadius: 100,
    // backgroundColor: "red",
    color: "white",
  },
});

export default GoalPlusButton;
