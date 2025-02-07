import axios from "axios";

const API_KEY = "LZp6RHba4NynNs6NsjgrLLkWBPklQQAYtn9j5NUg";
const API_URL = "https://api.cohere.ai/generate";

export const generateQuestion = async (
  topic: string | null,
  difficulty: string | null
): Promise<string | null> => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "command-r-plus",
        prompt: `Generate a well-structured multiple-choice question on the topic of ${topic} with a difficulty level of ${difficulty} (easy, medium, or hard). Provide exactly four answer choices labeled as A, B, C, and D. Do not indicate the correct answer. with a proper format avoid to generate text like Here is an easy multiple-choice question on the topic of : Question`,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.text;
  } catch (error) {
    console.error("Error generating question:", error);
    return null;
  }
};

export const checkAnswer = async (
  question: string,
  userAnswer: string
): Promise<string> => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "command-r-plus",
        prompt: `For the question: "${question}", is the answer "${userAnswer}" correct? Reply with exactly "Correct!" or "Incorrect!"`,
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const result = response.data.text.trim();
    return result.includes("Correct") ? "Correct!" : "Incorrect!";
  } catch (error) {
    console.error("Error checking answer:", error);
    return "Incorrect!";
  }
};
