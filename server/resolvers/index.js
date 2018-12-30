const { merge } = require('lodash');
const { resolvers: RecipeResolvers } = require('./recipe')
const { resolvers: CookingUnitResolvers } = require('./cookingUnit')
const { resolvers: TimeUnitResolvers } = require('./timeUnit')
const { resolvers: UserResolvers } = require('./user')

module.exports = merge(
  RecipeResolvers,
  UserResolvers,
  CookingUnitResolvers,
  TimeUnitResolvers
)