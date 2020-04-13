import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { GET_RECIPES } from './queries/getRecipes';
import RecipeCard from './recipeCard';
import { Query } from 'react-apollo';

const RecipeList = () => (
  <Query query={GET_RECIPES} >
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return 'Error';
      const { recipes } = data;
      return recipes.map((recipe) => (
        <RecipeCard
          {...recipe}
        />
      ));
    }}
  </Query >
)

export default withRouter(RecipeList)