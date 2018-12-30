const mongoose = require('mongoose');
const db = require('../database/schema');
const orderResults = require('../helpers/orderResults');

const fetchRecipes = async (ids) => {
  const results = await db.Recipe.find({
    '_id': { $in: ids.map(id => mongoose.Types.ObjectId(id)) }
  });
  return orderResults(ids, results)
}

module.exports = {
  resolvers: {
    Query: {
      recipe: (_, { id }, { loaders }) => loaders.Recipe.load(id)
    }
  },
  fetchRecipes
}