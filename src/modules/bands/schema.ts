export default `
type Band {
  _id: ID!
  name: String
  origin: String
  members: [String]
  website: String
  genres: [Genre]
} 
`