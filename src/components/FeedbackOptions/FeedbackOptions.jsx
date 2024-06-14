import { FeedbackButton, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <FeedbackButton onClick={() => onLeaveFeedback(option)} key={option}>
            {option}
          </FeedbackButton>
        );
      })}
    </Wrapper>
  );
};