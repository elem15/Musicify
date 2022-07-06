const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
require('dotenv').config()

const axios = require('axios').default;
const genresURL = process.env.GENRES_URL;
const usersURL = process.env.USERS_URL;
const PORT = process.env.PORT || 4000;

const schema = buildSchema(`
  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: String
    subGenres: [Genre] 
  }

  type JWT {
    jwt: String
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
    login(    
      password: String,
      email: String      
      ): JWT   
  }
  
  type Mutation {
    createGenre(name: String, description: String, country: String, year: Int): Genre
  }
  `);

interface ExtResponse extends Response {
  data: object
}

type User = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

type Genre = {
  name: string
  description: string
  country: String
  year: number
}

let token = '';

const root = {
  genres: async (limit: number, offset: number) => {
    const response = await axios.get(genresURL);
    return response.data.items;
  },
  genre: async ({ id }: { id: string }) => {
    const response = await axios.get(genresURL);
    return response.data.items.find((item: { _id: string }) => item._id === id);
  },
  createGenre: async ({ name, description, country, year }: Genre) => {
    const response = await axios.post(genresURL,
      { name, description, country, year },
      {
        headers: {
          'Authorization': `Basic ${token}`
        }
      });
    console.log(response.data)
    return response.data;
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
    return response.data;
  },
  login: async ({
    password,
    email
  }: User) => {
    const response = await axios.post(`${usersURL}/login`, {
      password,
      email
    });
    token = response.data.jwt
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