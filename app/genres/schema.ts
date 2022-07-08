import { buildSchema } from 'graphql';
import { gql } from 'apollo-server'

export default gql`

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
  `;

