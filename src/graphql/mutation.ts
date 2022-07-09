export default `
type Mutation {  
  register( firstName: String!, lastName: String!, password: String!, email: String!): User

  createGenre(name: String!, description: String!, country: String!, year: Int!): Genre
  updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre
  deleteGenre(id: ID!): deleteGenre

  createArtist(firstName: String!, secondName: String!, middleName: String, birthDate: String, country: String!, bandsIds: [ID!], instruments: [String]): Artist
  updateArtist(id: ID!, firstName: String, secondName: String, middleName: String, birthDate: String, country: String, bandsIds: [ID!], instruments: [String]): Artist
  deleteArtist(id: ID!): deleteGenre

  createBand(name: String!, origin: String, members: [ID!], website: String, genresIds: [ID!]): Band
  updateBand(id: ID!, name: String, origin: String, members: [ID!], website: String, genresIds: [ID!]): Band
  deleteBand(id: ID!): deleteGenre

  createTrack( 
    title: String!, 
    albumId: ID, 
    artistsIds: [ID!], 
    bandsIds: [ID!], 
    duration: Int, 
    released: Int, 
    genresIds: [ID!]
    ): Track
  updateTrack( 
    id: ID!, 
    title: String, 
    albumId: ID, 
    artistsIds: [ID!], 
    bandsIds: [ID!], 
    duration: Int, 
    released: Int, 
    genresIds: [ID!]
    ): Track
  deleteTrack(id: ID!): deleteGenre

  createAlbum( 
    name: String!
    released: Int
    artists: [ID]
    bands: [ID]
    tracks: [ID]
    genres: [ID]
    image: String
    ): Album
  updateAlbum( 
    id: ID!
    name: String
    released: Int
    artists: [ID]
    bands: [ID]
    tracks: [ID]
    genres: [ID]
    image: String
    ): Album
  deleteAlbum(id: ID!): deleteGenre

}
`