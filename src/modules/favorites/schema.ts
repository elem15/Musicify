export default `
type Favorite {
  _id: ID!
  userId: ID
  bandsIds: [ID]
  genresIds: [ID]
  artistsIds: [ID]
  tracksIds: [ID]
}
`