// import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, List, Button } from './FeedbackOptions.styled';

// render() {
//   const { options, onLeaveFeedback } = this.props;
const FeedbackOptions = ({options, onLeaveFeedback}) => {
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


export default FeedbackOptions;

FeedbackOptions.protoType = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired
};
