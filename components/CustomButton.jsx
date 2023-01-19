import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const CustomButton = (props) => {
  function onPressHandler() {
    props.onPressHandler();
  }

  const styles = StyleSheet.create({
    container: {
      height: props.height,
      width: props.width,
      borderRadius: props.borderRadius ? props.borderRadius : 20,
      backgroundColor: "transparent",
      overflow: "hidden",
    },
    button: {
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : "transparent",
      borderRadius: props.borderRadius ? props.borderRadius : 20,
      padding: 10,
      width: "100%",
    },
    textStyle: {
      color: props.textColor ? props.textColor : "white",
      fontWeight: "bold",
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        android_ripple={{ color: "#fed7aa" }}
        onPress={onPressHandler}
      >
        <Text style={styles.textStyle}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
