import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuizFormScreen = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={{ display:'flex', justifyContent:"center", marginTop:20}}>
      <Text>Quiz Form Screen</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Select Category" value=""/>
        <Picker.Item label="General Knowledge" value="9" />
        <Picker.Item label="Entertainment: Books" value="10" />
        <Picker.Item label="Entertainment: Film" value="11" />
        <Picker.Item label="Entertainment: Music" value="12" />
      </Picker>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Select Difficulty" value="" />
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
      </Picker>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Select Type" value="" />
        <Picker.Item label="Multiple Choice" value="multiple" />
        <Picker.Item label="True / False" value="boolean" />
      </Picker>

      <Button title="Create Quiz" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default QuizFormScreen;
