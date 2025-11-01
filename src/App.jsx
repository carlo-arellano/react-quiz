import { useState } from "react";
import { questions } from "./data/questions.json";
import StatisticBar from "./components/StatisticBar";
import Question from "./components/Question";
import Reset from "./components/Reset";

function App() {
  const allQuestions = questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [waitingtoAdvance, setWaitingtoAdvance] = useState(false);

  const onSubmit = (correct) => {
    if (correct) setCorrectAnswers(correctAnswers + 1);
    else setIncorrectAnswers(incorrectAnswers + 1);

    setWaitingtoAdvance(true);
  };

  const advance = () => {
    setWaitingtoAdvance(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const reset = () => {
    setCurrentQuestionIndex(0);
    setWaitingtoAdvance(false);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  if (currentQuestionIndex >= allQuestions.length) {
    return (
      <>
        <Reset
          totalQuestions={allQuestions.length}
          correctQuestions={correctAnswers}
          onPress={reset}
        />
      </>
    );
  }

  return (
    <div>
      <div className="flex-row justify-between p-8 bg-gray-600 rounded-md text-white items-center w-full">
        <StatisticBar
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={allQuestions.length}
          correct={correctAnswers}
          incorrect={incorrectAnswers}
        />
        <Question
          question={allQuestions[currentQuestionIndex]}
          onSubmit={onSubmit}
        />
      </div>
      {waitingtoAdvance && (
        <button className="w-full mt-2" onClick={advance}>
          NEXT
        </button>
      )}
    </div>
  );
}

export default App;
