export default `
type Favorites {
  id: ID!
  userId: ID
  bands: [ID]
  genres: [ID]
  artists: [ID]
  tracks: [ID]
}
`