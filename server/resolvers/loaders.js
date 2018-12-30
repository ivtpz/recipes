const DataLoader = require('dataloader');
const { fetchUsers } = require('./user');
const { fetchRecipes } = require('./recipe');
const { fetchCookingUnits } = require('./cookingUnit');
const { fetchTimeUnits } = require('./timeUnit');

// Static data is cached for the life of the server process
const TimeUnit = new DataLoader(fetchTimeUnits);
const CookingUnit = new DataLoader(fetchCookingUnits);

const createLoaders = () => ({
  User: new DataLoader(fetchUsers),
  Recipe: new DataLoader(fetchRecipes),
  TimeUnit,
  CookingUnit
})

module.exports = createLoaders;
