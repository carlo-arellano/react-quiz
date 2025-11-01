
const Answer = ({text, onPress, color, disabled}) => {

    return (
        <button onClick={onPress} disabled={disabled}>
            <span className={color}>
                {text}
            </span>
        </button>
    );
}

export default Answer;