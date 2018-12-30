const mongoose = require('mongoose');
const db = require('../database/schema');
const orderResults = require('../helpers/orderResults');

const fetchCookingUnits = async (ids) => {
  const results = await db.Unit.find({
    '_id': { $in: ids.map(id => mongoose.Types.ObjectId(id)) }
  })
  return orderResults(ids, results);
}

module.exports = {
  resolvers: {
    Ingredient: {
      unit: ({ unit }, _, { loaders }) => loaders.CookingUnit.load(unit)
    }
  },
  fetchCookingUnits
}