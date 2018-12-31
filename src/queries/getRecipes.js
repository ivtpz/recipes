import gql from 'graphql-tag';

export const GET_RECIPES = gql`
{
  recipes {
    id
    name
    creator {
      firstName
      lastName
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

export default GET_RECIPES