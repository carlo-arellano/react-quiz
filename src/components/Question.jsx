import Options from './Options';

const Question = ({question, onSubmit}) => {

    return (
        <div>
            <h3>{question.question}</h3>
            <Options question={question} onSubmit={onSubmit} />
        </div>
    );
}

export default Question;