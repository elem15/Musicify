import { buildSchema } from 'graphql';
import { gql } from 'apollo-server'

export default `
type Genre {
  _id: ID!
  name: String
  description: String
  country: String
  year: String
  subGenres: [Genre] 
}

type Mutation {
  createGenre(name: String, description: String, country: String, year: Int): Genre
}
`