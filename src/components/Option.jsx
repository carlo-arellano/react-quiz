
const Answer = ({text, onPress, color, disabled}) => {
    const style = color ? { color: color } : {};

    return (
        <button onClick={onPress} disabled={disabled}>
            <span className={color}>
                {text}
            </span>
        </button>
    );
}

export default Answer;