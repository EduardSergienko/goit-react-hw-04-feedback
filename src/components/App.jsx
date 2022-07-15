import { useState } from 'react';
import { Statistic } from './Statistic/statistic';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
import { Section } from './Section/section';
import { Notification } from './Notification/notification';
import { GlobalStyle } from './globalStyles';
import { AppWrap } from './App.styled';

export default function App() {
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good,
    neutral,
    bad,
  };

  const onBtnClick = option => {
    console.log(option);
    switch (option) {
      case 'good':
        setGoog(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <AppWrap>
      <GlobalStyle />
      <Section title="Please Leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onBtnClick} />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </AppWrap>
  );
}
