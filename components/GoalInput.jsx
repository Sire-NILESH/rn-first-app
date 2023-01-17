import { View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState();

  function inputHandler(userInput) {
    setEnteredGoal(userInput);
  }

  function formHandler() {
    if (enteredGoal.trim().length > 0) {
      props.setGoalsHandler(enteredGoal);
      setEnteredGoal("");
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputContainer__input}
        placeholder="Enter goal"
        onChangeText={inputHandler}
        value={enteredGoal}
      />
      <Button title="Add your goal" onPress={formHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  inputContainer__input: {
    width: "60%",
    borderWidth: 2,
    borderColor: "#fafafa",
    borderRadius: 16,
    fontSize: 18,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
});

export default GoalInput;
