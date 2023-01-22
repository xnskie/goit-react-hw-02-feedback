import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, List, Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
      const { options, onLeaveFeedback } = this.props;
      
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <>
          {Object.keys(options).map(option => (
            <List key={option}>
              <Button type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </Button>
            </List>
          ))}
        </>
      </Container>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      option: PropTypes.string.isRequired,
    })
  ),
};
