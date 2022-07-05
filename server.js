const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get("http://localhost:3001/v1/genres")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {

    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    items: [Genre]
    limit: Int
    offset: Int
    total: Int
  }
  type Genre {
    _id: ID
    name: String
    description: String
    country: String
    year: String    
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  limit: async () => {
    const response = await axios.get("http://localhost:3001/v1/genres");
    return response.data.limit;
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');