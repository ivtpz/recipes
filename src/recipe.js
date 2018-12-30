import React from 'react';
import styled from 'styled-components';
import Ingredients from './ingredients';
import Directions from './directions';
import biscuits from './images/biscuits.jpg';
import { CardHeader, Card, Divider, CardMedia } from '@material-ui/core';

const Title = styled.h1`
  margin: 10px 0px;
`;

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

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const mockIngredients = [
  { quantity: 8, unit: 'cups', name: 'flour' },
  { quantity: 8, unit: 'cups', name: 'flour' },
  { quantity: 8, unit: 'cups', name: 'flour' },
  { quantity: 8, unit: 'cups', name: 'flour' },
  { quantity: 8, unit: 'cups', name: 'flour' },
  { quantity: 8, unit: 'cups', name: 'flour' }
];

const mockSteps = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  'Mix the ingredients',
  'Cook'
]

const Recipe = () => (
  <Card>
    <ImageContainer>
      <Image src={biscuits} title="biscuits"></Image>
      <ImageTitle>Cheddar Biscuits</ImageTitle>
    </ImageContainer>
    <Divider />
    <Ingredients ingredients={mockIngredients}></Ingredients>
    <Divider />
    <Directions steps={mockSteps}></Directions>
  </Card>
)

export default Recipe