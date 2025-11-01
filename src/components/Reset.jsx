import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const Reset = ({correctQuestions, totalQuestions, onPress}) => {
    
    const {width, height} = useWindowSize();
    const correctPercentage = (correctQuestions / totalQuestions) * 100;

    return (
        <div className="flex-row justify-between p-8 bg-gray-600 rounded-md text-white items-center">
            <span className="text-5xl mb-10">
                You scored: {correctPercentage.toFixed(2)}%
            </span>
            {(correctPercentage >= 70) && ( 
                <div className="w-full items-center mt-10">
                    <span className="text-3xl">Congratulations!</span>
                    <Confetti
                        width={width}
                        height={height}
                    />
                </div>
            )}
            {(correctPercentage < 70) && ( 
                <div className="w-full items-center mt-10">
                    <span className="text-2xl">The passing rate is 70%.</span>
                </div>
            )}
            <button
                onClick={onPress}
                className="w-full mt-10">
                Try Again!
            </button>
        </div>
    );
}

export default Reset;