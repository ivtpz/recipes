import React from 'react';
import styled from 'styled-components';
import RecipeTimeSummary from './recipeTimeSummary';
import biscuits from './images/biscuits.jpg';
import { Card, Divider, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CardWrapper = styled(Card)`
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const InvisibleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CardImage = styled(CardMedia)`
  height: 200px;
`;

const ImageTitle = styled.div`
  font-size: 2em;
  font-weight: 600;
  padding-left: 15px;
`;

const Creator = styled.div`
  padding-left: 20px;
`;

const Header = styled.div`
`;

const RecipeCard = ({ name, creator, summary, id }) => (
  <CardWrapper>
    <InvisibleLink to={`/recipe/${id}`}>
      <CardImage image={biscuits} title="biscuits"></CardImage>
      <Header>
        <ImageTitle>{name}</ImageTitle>
        <Creator>Posted by: {creator.firstName} {creator.lastName}</Creator>
      </Header>
      <Divider />
      <RecipeTimeSummary summary={summary}></RecipeTimeSummary>
    </InvisibleLink>
  </CardWrapper>
)

export default RecipeCard