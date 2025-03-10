# AI Exam Application

A modern, interactive examination platform powered by AI that generates and evaluates questions on various topics.

## 🎯 Key Features

- 📝 **Dynamic Question Generation**: Generate questions based on selected topics.
- 🔧 **Customizable Exam Settings**:
  - Number of questions
  - Topic selection
  - Difficulty levels (Easy, Medium, Hard)
- 🔍 **Real-time Answer Evaluation**: Instant feedback on answers.
- 📊 **Comprehensive Exam Results**: Detailed feedback on performance.
- 🎨 **Clean and Modern UI**: Built using Radix UI for a seamless user experience.

## 📂 Directory Structure

```
src/
├── components/        # Reusable components
├── styles/            # CSS styles for components
│   ├── ExamSetup.css  # Styles for the Exam Setup page
│   └── TakeExam.css   # Styles for the Take Exam page
├── App.tsx            # Main application component
├── ExamSetup.tsx      # Exam setup component
├── TakeExam.tsx       # Exam taking component
├── GenerateQuestion.tsx # AI question generation logic
└── main.tsx           # Entry point of the application
```

## 🛠️ Tech Stack

- **Framework**: React
- **Language**: TypeScript
- **UI Library**: Radix UI
- **AI Integration**: Cohere AI API
- **Routing**: React Router
- **HTTP Client**: Axios

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Cohere AI API key

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/ai-exam-application.git
   cd ai-exam-application
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Cohere AI API key**:
   Create a `.env` file in the root directory and add your API key:

   ```
   VITE_COHERE_API_KEY=your_api_key_here
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

## 📸 Screenshots

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Cohere AI](https://cohere.ai/) for providing the AI question generation capabilities
- [Radix UI](https://www.radix-ui.com/) for the component library
