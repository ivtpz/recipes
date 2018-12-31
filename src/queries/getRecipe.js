import gql from 'graphql-tag';

export const GET_RECIPE = gql`
query GetRecipe($id: ID!) { 
  recipe(id: $id) {
    id
    name
    creator {
      firstName
      lastName
      userName
    }
    directions
    ingredients {
      item
      quantity
      unit {
        name
        abbreviation
      }
    }
    summary {
      prepTime {
        quantity
        unit {
          name
        }
      }
      cookTime {
        quantity
        unit {
          name
        }
      }
      totalTime {
        quantity
        unit {
          name
        }
      }
    }
  }
}`;

export default GET_RECIPE;