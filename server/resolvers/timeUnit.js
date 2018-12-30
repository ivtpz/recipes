const mongoose = require('mongoose');
const db = require('../database/schema');
const orderResults = require('../helpers/orderResults');

const fetchTimeUnits = async (ids) => {
  const results = await db.TimeUnit.find({
    '_id': { $in: ids.map(id => mongoose.Types.ObjectId(id)) }
  })
  return orderResults(ids, results);
}

module.exports = {
  resolvers: {
    RecipeTime: {
      unit: ({ unit }, _, { loaders }) => loaders.TimeUnit.load(unit) 
    }
  },
  fetchTimeUnits
}