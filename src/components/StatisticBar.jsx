
const StatisticBar = (props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
      <p>Questions: {props.currentQuestion} / {props.totalQuestions}</p>
      <p>Correct: {props.correct}</p>
      <p>Incorrect: {props.incorrect}</p>
    </div>
  );
};

export default StatisticBar;