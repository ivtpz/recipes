import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { GET_RECIPE } from './queries/getRecipe';
import RecipeTimeSummary from './recipeTimeSummary';
import Ingredients from './ingredients';
import Directions from './directions';
import biscuits from './images/biscuits.jpg';
import { Card, Divider } from '@material-ui/core';

const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 400px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  margin-top: -400px;
`;

const ImageTitle = styled.div`
  position: absolute;
  top: 300px;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 3em;
  font-weight: 600;
  text-shadow: 1px 1px black;
`

const Recipe = ({ match: { params: { id } } }) => (
  <Query query={GET_RECIPE} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return 'Error';
      const { recipe: { name, directions, ingredients, summary } } = data;
      console.log(summary)
      return (
        <Card>
          <ImageContainer>
            <Image src={biscuits} title="biscuits"></Image>
            <ImageTitle>{name}</ImageTitle>
          </ImageContainer>
          <Divider />
          <RecipeTimeSummary summary={summary}></RecipeTimeSummary>
          <Divider />
          <Ingredients ingredients={ingredients}></Ingredients>
          <Divider />
          <Directions steps={directions}></Directions>
        </Card>
      );
    }}
  </Query>
)

export default Recipe