// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function formHandler(enteredGoal) {
    console.log(enteredGoal);
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: keyGen(enteredGoal), data: enteredGoal },
    ]);
  }

  function deleteHandler(id) {
    console.log("delete", id);
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function keyGen(goalItem) {
    return `${Date.now()}-${goalItem}-${Number(Math.random() * 100).toFixed(
      4
    )}`;
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoalsHandler={formHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemObj) => (
            <GoalItem
              itemObj={itemObj}
              onDeleteHandler={deleteHandler}
              id={itemObj.item.id}
            />
          )}
          keyExtractor={(goal, _index) => {
            return goal.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#fafafa",

    marginTop: 50,
    paddingHorizontal: 14,
    height: "100%",
  },

  goalsContainer: {
    marginTop: 20,
  },
});
