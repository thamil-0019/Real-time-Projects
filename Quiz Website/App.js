import React, { useState } from "react";
import "./App.css";

// A simple React component for the landing page
function LandingPage({ onStartQuiz }) {
  return (
    <div className="landing-container">
      <h2>Welcome to the Quiz</h2>
      <h4 id="ani">Test your knowledge with this fun quiz</h4>
      <button onClick={onStartQuiz} className="start-btn">
        Start Quiz
      </button>
    </div>
  );
}

// A simple React component for the quiz page
function QuizPage() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Newton", "Einstein", "Galileo", "Darwin"],
      answer: "Einstein",
    },
    {
      question:
        "In Which part of your body would you find the cruciate ligament?",
      options: ["Eyes", "Knees", "Legs", "Arms"],
      answer: "Eyes",
    },
    {
      question: "What is the Capital of New Zealand?",
      options: ["London", "Abuja", "Wellington", "Canberra"],
      answer: "Wellington",
    },
    {
      question:
        "Which British actor will play Batman in the upcoming reboot directed by Matt Reeves?",
      options: ["JohnPaul", "Henry", "Robert", "Christ Bale"],
      answer: "Robert",
    },
    {
      question: "Which country has the longest Airport in the world?",
      options: ["Saudi Arabia", "Russia", "Niger", "India"],
      answer: "Saudi Arabia",
    },
    {
      question: "What is the world's most populated country?",
      options: ["Iraq", "Russia", "China", "India"],
      answer: "India",
    },
    {
      question: "Which action of Earth causes the change of seasons?",
      options: ["Earthquake", "Global Warming", "Revolution", "Rotation"],
      answer: "Rotation",
    },
    {
      question: "In which season is Earth closest to the sun?",
      options: ["Winter", "Autumn", "Summer", "Spring"],
      answer: "Summer",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      alert(`Quiz Over! Your score is: ${score} / ${questions.length}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Quiz: Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              selectedAnswer === option ? "selected" : ""
            }`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={handleNextQuestion} className="next-btn">
        Next Question
      </button>
    </div>
  );
}

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <LandingPage onStartQuiz={handleStartQuiz} />
      ) : (
        <QuizPage />
      )}
    </div>
  );
}

export default App;
