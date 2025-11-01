import { useState } from 'react';
import {questions} from './data/questions.json';
import StatisticBar from './components/StatisticBar'
import Question from './components/Question'

function App() {

  const allQuestions = questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [waitingtoAdvance, setWaitingtoAdvance ] = useState(false);

  const onSubmit = (correct) => {
    if (correct) setCorrectAnswers(correctAnswers + 1);
    else setIncorrectAnswers(incorrectAnswers + 1);

    setWaitingtoAdvance(true);
  }

  const advance = () => {
    setCurrentQuestionIndex(0);
    setWaitingtoAdvance(false);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  }

  if (currentQuestionIndex >= allQuestions.length) {
    return (
      <>
        <div className="container">
          <h2>Quiz Complete!</h2>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          <button onClick={advance}>Restart Quiz</button>
        </div>
      </>
    )
  }
  
  return (
    <div>
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
        {waitingtoAdvance && (
            <button
                onClick={advance}
            >
                Next Question...
            </button>
        )}
    </div>
  );
}

export default App
