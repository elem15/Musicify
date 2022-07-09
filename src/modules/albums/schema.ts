export default `
type Album {
  _id: ID!
  name: String
  released: Int
  artistsIds: [ID]
  bandsIds: [ID]
  tracksIds: [ID]
  genresIds: [ID]
  image: String
}
`