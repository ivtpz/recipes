import React from 'react';
import { Query } from 'react-apollo';
import { GET_RECIPES } from './queries/getRecipes';
import RecipeCard from './recipeCard';

const RecipeList = () => (
  <Query query={GET_RECIPES}>
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
  </Query>
)

export default RecipeList