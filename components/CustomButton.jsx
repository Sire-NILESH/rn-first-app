import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const CustomButton = (props) => {
  function onPressHandler() {
    props.onPressHandler();
  }

  return (
    <View
      style={[
        styles.container,
        {
          height: props.height,
          width: props.width,
          borderRadius: props.borderRadius,
        },
      ]}
    >
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
          },
        ]}
        android_ripple={{ color: "#fed7aa" }}
        onPress={onPressHandler}
      >
        <Text style={[styles.textStyle, { color: props.textColor }]}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 20,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 10,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
