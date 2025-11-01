
const StatisticBar = (props) => {
  return (
    <div>
      <p>
        Questions: {props.currentQuestion} / {props.totalQuestions}
      </p>
      <p>Correct: {props.correct}</p>
      <p>Incorrect: {props.incorrect}</p>
    </div>
  );
};

export default StatisticBar;