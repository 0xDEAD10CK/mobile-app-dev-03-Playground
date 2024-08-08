import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuizDetailsScreen = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [triviaQuestions, setTriviaQuestions] = useState([]);
    const [error, setError] = useState(null);

  const getQuiz = async () => {
    setLoading(true);

    try {
      const value = await AsyncStorage.getItem("quiz_data");

      if (value !== null) {
        const quizData = JSON.parse(value);
        setData(quizData);
      }

      setLoading(false);

    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  const fetchTriviaQuestions = async () => {
    if (data) {
      const { category, difficulty, type } = data;
      try {
        const response = await axios.get('https://opentdb.com/api.php', {
          params: {
            amount: 10, // number of questions
            category: category,
            difficulty: difficulty,
            type: type
          }
        });
        setTriviaQuestions(response.data.results);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  useEffect(() => {
    if (data) {
      fetchTriviaQuestions();
    }
  }, [data]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {triviaQuestions.length > 0 && (
        <ul>
          {triviaQuestions.map((question, index) => (
            <li key={index}>{question.question}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default QuizDetailsScreen;
