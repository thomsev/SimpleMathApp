import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

interface MathQuestionProps {
  onCorrectAnswer: () => void;
}

export default function MathQuestion({ onCorrectAnswer }: MathQuestionProps) {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState(generateQuestion());
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = () => {
    if (parseInt(answer) === question.answer) {
      setIsCorrect(true);
      setFeedback("Correct! Generating next question...");
      setTimeout(() => {
        onCorrectAnswer();
        setQuestion(generateQuestion());
        setFeedback("");
        setIsCorrect(null);
        setAnswer("");
      }, 1000);
    } else {
      setIsCorrect(false);
      setFeedback("Incorrect answer, try again!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.text}</Text>
      <TextInput
        style={[styles.input, isCorrect === false ? styles.incorrect : null]}
        value={answer}
        onChangeText={setAnswer}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
      {feedback && (
        <Text
          style={[
            styles.feedback,
            isCorrect ? styles.correctFeedback : styles.incorrectFeedback,
          ]}
        >
          {feedback}
        </Text>
      )}
    </View>
  );
}

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1; // Ensuring numbers between 1 and 10
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = Math.random() > 0.5 ? "+" : "-";

  let text: string;
  let answer: number;

  if (operation === "+") {
    text = `${num1} + ${num2}`;
    answer = num1 + num2;
  } else {
    if (num1 >= num2) {
      // Ensuring no negative results
      text = `${num1} - ${num2}`;
      answer = num1 - num2;
    } else {
      text = `${num2} - ${num1}`;
      answer = num2 - num1;
    }
  }

  return { text, answer };
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
  },
  question: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "50%",
    textAlign: "center",
  },
  incorrect: {
    borderColor: "red",
  },
  feedback: {
    marginTop: 10,
    fontSize: 16,
  },
  correctFeedback: {
    color: "green",
  },
  incorrectFeedback: {
    color: "red",
  },
});
