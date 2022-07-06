const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
require('dotenv').config()

const axios = require('axios').default;
const genresURL = process.env.GENRES_URL;
const usersURL = process.env.USERS_URL;
const PORT = process.env.PORT || 4000;

interface ExtResponse extends Response {
  data: object
}
axios.post(`${usersURL}/register`, {
  firstName: 'first name',
  lastName: 'last name',
  password: 'last name',
  email: 'dfjak@gmail.com'
})
.then(function (response: ExtResponse) {
  console.log(response.data);
})
.catch(function (error: Error) {
  console.log(error);
});

const schema = buildSchema(`
  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: String
    subGenres: [Genre] 
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    password: String
    email: String
  }

  type Query {
    genre(id: ID!): Genre
    genres(limit: Int, offset: Int): [Genre]
    register( 
      firstName: String,
      lastName: String,
      password: String,
      email: String      
      ): User   
  }
  
  type Mutation {
    createGenre(name: String, description: String, country: String, year: Int): Genre
  }
  `);
  
// The root provides a resolver function for each API endpoint
type User = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}
const root = {
  // limit: async () => {
  //   const response = await axios.get("http://localhost:3001/v1/genres");
  //   return response.data.limit;
  // },
  genres: async (limit: number, offset: number) => {
    const response = await axios.get(genresURL);
    return response.data.items;
  },
  genre: async ({id}: {id: string}) => {
    const response = await axios.get(genresURL);
    return response.data.items.find((item: {_id: string}) => item._id === id);
  },
  register: async ({
    firstName,
    lastName,
    password,
    email
  }: User) => {
      const response = await axios.post(`${usersURL}/register`, {
        firstName,
        lastName,
        password,
        email
      });
      console.log(firstName);
      return response.data;
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);