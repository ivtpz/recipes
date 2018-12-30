const mongoose = require('mongoose')
const db = require('../database/schema');
const orderResults = require('../helpers/orderResults');

const fetchUsers = async (ids) => {
  const results = await db.User.find({
    '_id': { $in: ids.map(id => mongoose.Types.ObjectId(id)) }
  });
  return orderResults(ids, results);
}

module.exports = {
  resolvers: {
    Recipe: {
      creator: ({ creator }, _, { loaders }) => loaders.User.load(creator)
    }
  },
  fetchUsers
}