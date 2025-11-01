const Answer = ({ text, onPress, color, disabled }) => {
  return (
    <button
      onClick={onPress}
      disabled={disabled}
      className="w-full p-12 m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold"
    >
      <span className={color}>{text}</span>
    </button>
  );
};

export default Answer;
