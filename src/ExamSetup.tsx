import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Heading,
  TextField,
  Select,
  Button,
  Flex,
} from "@radix-ui/themes";
import "./styles/ExamSetup.css";

const ExamSetup: React.FC = () => {
  const [numQuestions, setNumQuestions] = useState<number>(1);
  const [topic, setTopic] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("medium");
  const navigate = useNavigate();

  const handleStartExam = () => {
    navigate(
      `/take-exam?numQuestions=${numQuestions}&topic=${topic}&difficulty=${difficulty}`
    );
  };

  return (
    <Flex className="exam-setup-container">
      <Card className="exam-setup-card">
        <Heading size="4" align="center" mb="4">
          Setup Your Exam
        </Heading>

        <div className="form-container">
          <TextField.Root
            type="number"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            placeholder="Number of Questions"
          />

          <TextField.Root
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Topic"
          />

          <Select.Root value={difficulty} onValueChange={setDifficulty}>
            <Select.Trigger placeholder="Select difficulty" />
            <Select.Content>
              <Select.Item value="easy">Easy</Select.Item>
              <Select.Item value="medium">Medium</Select.Item>
              <Select.Item value="hard">Hard</Select.Item>
            </Select.Content>
          </Select.Root>

          <Button color="green" variant="solid" onClick={handleStartExam} size="3">
            Start Exam
          </Button>
        </div>
      </Card>
    </Flex>
  );
};

export default ExamSetup;
