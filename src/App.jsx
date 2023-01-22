import React, { Component } from 'react';

import Notification from 'components/Notification';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import { Title } from 'components/Statistics/Statistics.styled';
import Statistics from 'components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback() {
    const totalFeedback = Object.values(this.state);
    // console.log(totalFeedback);

    return totalFeedback.reduce((total, value) => total + value, 0);
  }

  positiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.totalFeedback());
  }

  leaveFeedback = option => {
    this.setState(prevSate => ({
      [option]: prevSate[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isShowStatistics = this.totalFeedback();

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.leaveFeedback}
        />

        {!isShowStatistics && <Notification message="No feedback given" />}

        {isShowStatistics && (
          <Section>
            <Title>Statistics:</Title>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
