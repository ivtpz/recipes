const { gql } = require('apollo-server');

const typeDefs = gql`
type CookingUnit {
  id: ID!
  name: String!
  abbreviation: String
}

type Ingredient {
  quantity: Float
  unit: CookingUnit
  item: String
}

type TimeUnit {
  id: ID!
  name: String!
}

type RecipeTime {
  quantity: Int
  unit: TimeUnit
}

type RecipeSummary {
  prepTime: [RecipeTime]
  cookTime: [RecipeTime]
  totalTime: [RecipeTime]
  difficulty: Int
}

type User {
  id: ID!
  firstName: String
  lastName: String
  userName: String!
}

type Recipe {
  id: ID!
  name: String
  creator: User
  ingredients: [Ingredient]
  directions: [String]
  summary: RecipeSummary
}

type Query {
  recipe(id: ID!): Recipe
}
`;

module.exports = typeDefs;