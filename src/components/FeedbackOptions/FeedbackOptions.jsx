import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map((option, index) => {
                return (
                    <Btn
                        key={index}
                        onClick={() => { onLeaveFeedback(option) }}
                        type="button"
                    >{option}</Btn>
                )
            })}
        </>
    );
};