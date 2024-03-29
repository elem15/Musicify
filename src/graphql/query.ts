export default `
type Query {  
  register( 
    firstName: String!,
    lastName: String!,
    password: String!,
    email: String!      
    ): User   
  jwt(    
    password: String!,
    email: String!      
    ): JWT   
  getById(id: ID!): User

  genre(id: ID!): Genre
  genres(limit: Int, offset: Int): [Genre] 

  artist(id: ID!): Artist
  artists(limit: Int, offset: Int): [Artist]

  band(id: ID!): Band
  bands(limit: Int, offset: Int): [Band]

  track(id: ID!): Track
  tracks(limit: Int, offset: Int): [Track]

  album(id: ID!): Album
  albums(limit: Int, offset: Int): [Album]

  favorites: Favorite
}`