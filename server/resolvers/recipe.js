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

module.exports = {
  resolvers: {
    Query: {
      recipe: (_, { id }, { loaders }) => loaders.Recipe.load(id),
      recipes: fetchAllRecipes
    }
  },
  fetchRecipes
}