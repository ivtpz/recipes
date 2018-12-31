import React from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize';
import UnderlinedTitle from './underlinedTitle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`

const WrappingList = styled.ul`
  column-count: 4;
  column-gap: 20px;
`;

const Ingredients = ({ ingredients }) => {
    return (
      <Wrapper>
        <UnderlinedTitle>
          Ingredients
        </UnderlinedTitle>
        <WrappingList>
          {ingredients.map(({ quantity, item, unit }) => (
            <li>
              {pluralize(unit.name, quantity, true)} {item}
            </li>
          ))}
        </WrappingList>
      </Wrapper>
    );
  }

export default Ingredients;