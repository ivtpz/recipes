const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const config = require('config');
const createLoaders = require('./resolvers/loaders')


const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/recipe/:id', async (req, res) => {
//   const recipeId = req.params.id;
//   const foundRecipe = await Recipe.findById(recipeId)
//     .populate('ingredients.unit')
//     .populate('summary.prepTime.unit')
//     .populate('summary.cookTime.unit')
//     .populate('summary.totalTime.unit')
//   res.json(foundRecipe).send()
// });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: config.apolloEngine.apiKey
  },
  context: () => ({
    loaders: createLoaders()
  })
});

server.applyMiddleware({ app });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))