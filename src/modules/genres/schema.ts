export default `
type Genre {
  _id: ID!
  name: String
  description: String
  country: String
  year: String
  subGenres: [Genre] 
}
type deleteGenre {
  acknowledged: Boolean
  deletedCount: Int
}

type Mutation {
  createGenre(name: String!, description: String!, country: String!, year: Int!): Genre
  updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre
  deleteGenre(id: ID!): deleteGenre
}
`