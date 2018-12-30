import React, { Component } from 'react';
import styled from 'styled-components';
import Measure from 'react-measure';
import underline from './images/underline1.png';
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
          {ingredients.map(({ quantity, name, unit }) => (
            <li>
              {quantity} {unit} {name}
            </li>
          ))}
        </WrappingList>
      </Wrapper>
    );
  }

export default Ingredients;