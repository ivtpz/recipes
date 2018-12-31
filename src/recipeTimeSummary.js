import React from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize';
import TimerIcon from '@material-ui/icons/Timer';

const Wrapper = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 600;
`;

const StyledTimerIcon = styled(TimerIcon)`
  font-size: 28px !important;
`;

const TimeInfo = styled.div`

`

const titles = ['Prep', 'Cook', 'Total']

const RecipeTimeSummary = ({ summary: { prepTime, cookTime, totalTime } }) => (
  <Wrapper>
    {[prepTime, cookTime, totalTime].map((timeInfo, i) => (
      <TimeInfo key={i}>
        <Title>{titles[i]}</Title>
        {timeInfo.map(({ quantity, unit: { name } }) => (
          <div>
            <StyledTimerIcon />
            {pluralize(name, quantity, true)}
          </div>
        ))}
      </TimeInfo>
    ))}
  </Wrapper>
)

export default RecipeTimeSummary;