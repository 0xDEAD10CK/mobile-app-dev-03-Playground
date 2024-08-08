import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuizFormScreen = (props) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  // Three functions to set Category, Difficulty and Type
  const onChangeCategory = (inputText) => setCategory(inputText);
  const onChangeDifficulty = (inputText) => setDifficulty(inputText);
  const onChangeType = (inputText) => setType(inputText);
  

  const storeQuizData = async () => {
    try {
      const data = { category, difficulty, type };

      // Store the data in AsyncStorage
      await AsyncStorage.setItem("quiz_data", JSON.stringify(data));

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ display:'flex', justifyContent:"center", marginTop:20}}>
      <Text>Quiz Form Screen</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => onChangeCategory(itemValue)}
      >
        <Picker.Item label="Select Category" value=""/>
        <Picker.Item label="General Knowledge" value="9" />
        <Picker.Item label="Entertainment: Books" value="10" />
        <Picker.Item label="Entertainment: Film" value="11" />
        <Picker.Item label="Entertainment: Music" value="12" />
      </Picker>

      <Picker
        selectedValue={difficulty}
        onValueChange={(itemValue, itemIndex) => onChangeDifficulty(itemValue)}
      >
        <Picker.Item label="Select Difficulty" value="" />
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
      </Picker>

      <Picker
        selectedValue={type}
        onValueChange={(itemValue, itemIndex) => onChangeType(itemValue)}
      >
        <Picker.Item label="Select Type" value="" />
        <Picker.Item label="Multiple Choice" value="multiple" />
        <Picker.Item label="True / False" value="boolean" />
      </Picker>

      <Button
        title="Go to Quiz"
        onPress={() => {
          storeQuizData();
          props.navigation.navigate("QuizDetails");
        }}
      />
    </View>
  );
};

export default QuizFormScreen;
