import React from 'react';
import styled from 'styled-components';
import UnderlinedTitle from './underlinedTitle';

const Wrapper = styled.div`
  padding: 0px 20px;
  flex-grow: 1;
`;

const Step = styled.div`
  margin-top: 10px;
`

const Directions = ({ steps = [] }) => (
  <Wrapper>
    <UnderlinedTitle>Directions</UnderlinedTitle>
    {steps.map((step, i) => (
      <Step>
        {i + 1}. {step}
      </Step>
    ))}
  </Wrapper>
)

export default Directions;