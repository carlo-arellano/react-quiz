import Options from "./Options";

const Question = ({ question, onSubmit }) => {
  return (
    <div className="w-full text-center items-center">
      <h3 className="bg-gray-600 mt-8 font-bold text-2xl">
        {question.question}
      </h3>
      <Options question={question} onSubmit={onSubmit} />
    </div>
  );
};

export default Question;
