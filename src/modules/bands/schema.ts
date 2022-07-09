export default `
type Band {
  _id: ID!
  name: String
  origin: String
  members: [ID]
  website: String
  genres: [ID]
}
type Member {  
  artist: String
  instrument: String
  year: [String]
}
`