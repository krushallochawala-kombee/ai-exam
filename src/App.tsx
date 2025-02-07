import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Add this import
import TakeExam from './TakeExam'; // Add this import
import ExamSetup from './ExamSetup'; // Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExamSetup />} /> 
        <Route path="/take-exam" element={<TakeExam />} /> 
      </Routes> 
    </Router> // Close Router component
  );
}

export default App;