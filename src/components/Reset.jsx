
const Reset = ({correctQuestions, totalQuestions, onPress}) => {
    return (
        <div>
            <h1>
                You scored: {(correctQuestions / totalQuestions) * 100}%
            </h1>
            <button onClick={onPress}>Press to Try Again!</button>
        </div>
    );
}

export default Reset;