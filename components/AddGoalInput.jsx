import {
  View,
  Modal,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import TitleInput from "./TitleInput";

const { height, width } = Dimensions.get("window");

const AddGoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState();

  function inputHandler(userInput) {
    setEnteredGoal(userInput);
  }

  function formHandler() {
    if (enteredGoal && enteredGoal.trim().length > 0) {
      const final = enteredGoal.charAt(0).toUpperCase() + enteredGoal.slice(1);
      props.setGoalsHandler(final);
      setEnteredGoal("");
      props.setCloseModal();
    }
  }

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={props.modalVisible}
        animationType="fade"
      >
        <KeyboardAvoidingView behavior="position" style={styles.centeredView}>
          <View style={[styles.inputContainer, styles.modalContainer]}>
            <TitleInput inputHandler={inputHandler} enteredGoal={enteredGoal} />
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
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: width,
    height: height,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  modalContainer: {
    backgroundColor: "white",
    marginBottom: 30,
  },

  inputContainer: {
    width: width * 0.9,
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#fed7aa",
    paddingHorizontal: 16,
    paddingVertical: 24,
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
