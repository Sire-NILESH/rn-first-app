import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalsContainer__goalItem}>
      <Pressable
        onPress={props.onDeleteHandler.bind(this, props.id)}
        android_ripple={{ color: "#fed7aa" }}
        // style={({ pressed }) => pressed && styles.iosWorkAroundPressedStyle}
      >
        <Text style={styles.goalsContainer__goalItem__goalText}>
          {props.itemObj.item.data}
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  goalsContainer__goalItem: {
    marginVertical: 16,
    borderRadius: 14,
    backgroundColor: "white",
  },
  goalsContainer__goalItem__goalText: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    text: "#333",
    fontSize: 18,
    borderRadius: 14,
  },
  iosWorkAroundPressedStyle: {
    backgroundColor: "#fed7aa",
  },
});
export default GoalItem;
