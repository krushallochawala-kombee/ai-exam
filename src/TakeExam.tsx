import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { generateQuestion, checkAnswer } from "./GenerateQuestion";
import { Card, Heading, TextField, Button, Flex, Text } from "@radix-ui/themes";
import "./styles/TakeExam.css";

interface QuestionResult {
  question: string;
  userAnswer: string;
  isCorrect: boolean;
}

const TakeExam: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const numQuestions: number = parseInt(query.get("numQuestions") || "0", 10);
  const topic: string | null = query.get("topic");
  const difficulty: string | null = query.get("difficulty");

  const [question, setQuestion] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [examFinished, setExamFinished] = useState<boolean>(false);
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);

  const fetchQuestion = useCallback(async () => {
    setIsLoading(true);
    const newQuestion = await generateQuestion(topic, difficulty);
    setQuestion(newQuestion || "");
    setIsLoading(false);
  }, [topic, difficulty]);

  useEffect(() => {
    fetchQuestion();
  }, [fetchQuestion]);

  const handleSubmitAnswer = async () => {
    if (!userAnswer.trim()) return;

    setIsLoading(true);
    const isCorrect = await checkAnswer(question, userAnswer);

    // Store the result
    setQuestionResults((prev) => [
      ...prev,
      {
        question,
        userAnswer,
        isCorrect: isCorrect === "Correct!",
      },
    ]);

    setUserAnswer("");
    setIsLoading(false);

    if (currentQuestionIndex < numQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      fetchQuestion();
    } else {
      setExamFinished(true);
    }
  };

  if (examFinished) {
    const totalScore = questionResults.filter(
      (result) => result.isCorrect
    ).length;

    return (
      <Flex className="take-exam-container">
        <Card className="take-exam-card">
          <Heading size="4" align="center" mb="4">
            Exam Results
          </Heading>

          <Text size="5" align="center" mb="4" weight="bold">
            Final Score: {totalScore} out of {numQuestions}
          </Text>

          <div className="results-container">
            {questionResults.map((result, index) => (
              <Card key={index} className="result-card">
                <Text size="3" mb="2">
                  <strong>Question {index + 1}:</strong> {result.question}
                </Text>
                <Text size="2" mb="2">
                  <br />
                  <strong>Your Answer:</strong> {result.userAnswer}
                </Text>
                <br />
                <Text
                  size="2"
                  color={result.isCorrect ? "green" : "red"}
                  weight="bold"
                >
                  {result.isCorrect ? "✓ Correct" : "✗ Incorrect"}
                </Text>
              </Card>
            ))}
          </div>
        </Card>
      </Flex>
    );
  }

  return (
    <Flex className="take-exam-container">
      <Card className="take-exam-card">
        <Heading size="4" mb="2">
          AI Exam Application
        </Heading>
        <Text size="2" color="gray">
          Topic: {topic}
        </Text>
        <Text size="2" color="gray" mb="4">
          Question {currentQuestionIndex + 1} of {numQuestions}
        </Text>

        {isLoading ? (
          <Text size="3" align="center">
            Loading...
          </Text>
        ) : (
          <div className="question-container">
            <Text size="4" mb="4">
              {question}
            </Text>

            <div className="answer-section">
              <TextField.Root
                size="3"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Your answer"
              />

              <Button
                size="3"
                color="green"
                variant="solid"
                onClick={handleSubmitAnswer}
                disabled={isLoading}
              >
                Submit Answer
              </Button>
            </div>
          </div>
        )}
      </Card>
    </Flex>
  );
};

export default TakeExam;
