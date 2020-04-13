const mongoose = require('mongoose');
const db = require('../database/schema');
const orderResults = require('../helpers/orderResults');

const fetchRecipes = async (ids) => {
  const results = await db.Recipe.find({
    '_id': { $in: ids.map(id => mongoose.Types.ObjectId(id)) }
  });
  return orderResults(ids, results)
};

const fetchAllRecipes = async () => {
  return db.Recipe.find({})
}

const createRecipe = async (user) => {
  console.log(user);
  return {}
}

module.exports = {
  resolvers: {
    Query: {
      recipe: (_, { id }, { loaders }) => loaders.Recipe.load(id),
      recipes: fetchAllRecipes
    },
    Mutation: {
      createRecipe: (_, __, { user }) => createRecipe(user)
    }
  },
  fetchRecipes
}