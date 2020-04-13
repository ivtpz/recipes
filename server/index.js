const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const config = require('config');
const createLoaders = require('./resolvers/loaders')
const routes = require('./routes');
const { omit } = require("lodash");
const fs = require("fs")
const path = require("path")


const app = express();
const port = 5000;

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  next()
})

const isIntrospectionQuery = requestBody =>
  requestBody.operationName === 'IntrospectionQuery' || requestBody.query.match(/query IntrospectionQuery /);

const getUser = (headers, res) => {
  console.log("getting user", headers)
    try {
      const cert = fs.readFileSync(path.join(__dirname, '../aita.pem'), 'utf8');
      const token = headers.authorization.split(' ')[1];
      const jwtData = jwt.verify(token, cert);
      return omit(jwtData, 'exp', 'iat');
    } catch (err) {
      console.log(err)
      // Indicates user is not authenticated
      return null;
    }  
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: config.apolloEngine.apiKey
  },
  context: ({ req, res }) => ({
    loaders: createLoaders(),
    user: isIntrospectionQuery(req.body) ? null : getUser(req.headers, res)
  })
});

server.applyMiddleware({ app });

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))