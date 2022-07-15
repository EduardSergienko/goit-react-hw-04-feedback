import PropTypes from 'prop-types';
import { OprionList, Optionbtn } from './feedbackOptions.styled';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsName = Object.keys(options);
  return (
    <OprionList>
      {optionsName.map(option => {
        return (
          <li key={option}>
            <Optionbtn onClick={() => onLeaveFeedback(option)}>
              {option}
            </Optionbtn>
          </li>
        );
      })}
    </OprionList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func.isRequired,
};
