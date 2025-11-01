import {useState, useEffect} from 'react';
import Option from './Option';

const Options = ({question, onSubmit}) => {

    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        setShowAnswer(false);
    }, [question]);

    const onPress = (index) => {
        setShowAnswer(true);
        onSubmit(question.question.correctAnswerIndex === index);
    };

    return (
        <div>
            {question.options.map((option, index) => {
                let color = '';

                if (showAnswer && question.correctAnswerIndex === index)
                    color = 'text-green-500';
                else if (showAnswer)
                    color = 'text-red-500';

                return (
                    <Option
                        text={option}
                        onPress={() => onPress(index)}
                        color={color}
                        disabled={showAnswer}
                        key={index}
                    />
                )
            })}
        </div>
    );
}

export default Options;