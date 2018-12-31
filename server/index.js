const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const config = require('config');
const createLoaders = require('./resolvers/loaders')
const routes = require('./routes');


const app = express();
const port = 5000;

app.use(bodyParser.json())

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

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))