export default `
type Mutation {  
  register( firstName: String!, lastName: String!, password: String!, email: String!): User

  createGenre(name: String!, description: String!, country: String!, year: Int!): Genre
  updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre
  deleteGenre(id: ID!): deleteGenre

  createArtist(firstName: String!, secondName: String!, middleName: String, birthDate: String, country: String!, bandsIds: [String], instruments: [String]): Artist
  updateArtist(id: ID!, firstName: String, secondName: String, middleName: String, birthDate: String, country: String, bandsIds: [String], instruments: [String]): Artist
  deleteArtist(id: ID!): deleteGenre

  createBand(name: String!, origin: String, membersId: [String], website: String,genresIds: [String]): Band
  updateBand(id: ID!, name: String, origin: String, membersId: [String], website: String,genresIds: [String]): Band
  deleteBand(id: ID!): deleteGenre
}
`