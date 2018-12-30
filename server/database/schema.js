const config = require('config');
const mongoose = require('mongoose');

const { db } = config;
const dbUrl = `mongodb://${db.user}:${db.pass}@${db.host}/${db.name}`;
mongoose.connect(dbUrl)

const UnitSchema = new mongoose.Schema({
  name: String,
  abbreviation: String
})
const TimeUnitSchema = new mongoose.Schema({
  name: String
})

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: {type: String, index: true, unique: true}
})

const RecipeSchema = new mongoose.Schema({
  name: String,
  creator: { type: mongoose.Schema.ObjectId, ref: 'User' },
  ingredients: [{
    quantity: Number,
    unit: { type: mongoose.Schema.ObjectId, ref: 'Unit' },
    item: String
  }],
  directions: [String],
  summary: {
    prepTime: [{ quantity: Number, unit: { type: mongoose.Schema.ObjectId, ref: 'TimeUnit' } }],
    cookTime: [{ quantity: Number, unit: { type: mongoose.Schema.ObjectId, ref: 'TimeUnit' } }],
    totalTime: [{ quantity: Number, unit: { type: mongoose.Schema.ObjectId, ref: 'TimeUnit' } }],
    difficulty: Number
  }
});

const Unit = mongoose.model('Unit', UnitSchema);
const User = mongoose.model('User', UserSchema);
const TimeUnit = mongoose.model('TimeUnit', TimeUnitSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
  Unit,
  User,
  TimeUnit,
  Recipe
}