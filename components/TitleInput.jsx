import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const TitleInput = (props) => {
  return (
    <TextInput
            style={styles.inputContainer__input}
            placeholder="Enter goal"
            onChangeText={props.inputHandler}
            value={props.enteredGoal}
          />
  )
}
const styles = StyleSheet.create({
  inputContainer__input: {
    width: "100%",
    fontSize: 18,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
})
export default TitleInput