const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
require('dotenv').config()

const axios = require('axios').default;
const baseURL = process.env.GENRES_URL;
const PORT = process.env.PORT || 4000;
// Make a request for a user with a given ID

axios.get("http://localhost:3001/v1/genres")
  .then(function (response: Response): void {
    // handle success

    // console.log(response.data);
  })
  .catch(function (error: Error) {

    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: String
    subGenres: [Genre] 
  }

  type Query {
    genre(id: ID!): Genre
    genres(limit: Int, offset: Int): [Genre]    
  }
  
  type Mutation {
    createGenre(name: String, description: String, country: String, year: Int): Genre
  }
  `);
  
// The root provides a resolver function for each API endpoint
const root = {
  // limit: async () => {
  //   const response = await axios.get("http://localhost:3001/v1/genres");
  //   return response.data.limit;
  // },
  genres: async (limit: number, offset: number) => {
    const response = await axios.get(baseURL);
    return response.data.items;
  },
  genre: async (id: {id: string}) => {
    const response = await axios.get(baseURL);
    return response.data.items.find((item: {_id: string})  => item._id === id.id);
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);