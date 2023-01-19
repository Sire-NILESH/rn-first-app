import { View, TextInput, Button, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const AddGoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState();

  function inputHandler(userInput) {
    setEnteredGoal(userInput);
  }

  function formHandler() {
    if (enteredGoal.trim().length > 0) {
      const final = enteredGoal.charAt(0).toUpperCase() + enteredGoal.slice(1);
      props.setGoalsHandler(final);
      setEnteredGoal("");
      props.setCloseModal();
    }
  }

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputContainer__input}
            placeholder="Enter goal"
            onChangeText={inputHandler}
            value={enteredGoal}
          />
          <View style={styles.inputContainer__buttonsContainer}>
            <CustomButton
              title="Add to goals"
              backgroundColor="#eee"
              textColor="#555"
              width={150}
              onPressHandler={formHandler}
              borderRadius={10}
            />
            <CustomButton
              title="Cancel"
              backgroundColor="transparent"
              textColor="#555"
              width={80}
              onPressHandler={props.setCloseModal}
              borderRadius={50}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
  },

  inputContainer: {
    width: "90%",
    height: 200,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#fed7aa",
    paddingHorizontal: 16,
    paddingVertical: 24,
    position: "absolute",
    bottom: 30,
  },

  inputContainer__input: {
    width: "100%",
    fontSize: 18,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },

  inputContainer__buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AddGoalInput;
