// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalPlusButton from "./components/GoalPlusButton";
import AddGoalInput from "./components/AddGoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function formHandler(enteredGoal) {
    console.log(enteredGoal);
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: keyGen(enteredGoal), data: enteredGoal },
    ]);
  }

  function showModalHandler() {
    setModalVisible(true);
  }

  function closeModalHandler() {
    setModalVisible(false);
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
      {modalVisible && (
        <AddGoalInput
          setGoalsHandler={formHandler}
          modalVisible={modalVisible}
          setShowModal={showModalHandler}
          setCloseModal={closeModalHandler}
        />
      )}
      <GoalPlusButton setShowModal={showModalHandler} />

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
    backgroundColor: "#f5f5f5",
    marginTop: 50,
    paddingHorizontal: 14,
    height: "100%",
    minHeight: "100%",
  },

  goalsContainer: {
    marginTop: 20,
  },
});
