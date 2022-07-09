export default `
type Track {
  _id: String
  title: String  
  albumId: String
  artistsIds: [String]
  bandsIds: [String]
  duration: Int
  released: Int
  genresIds: [String]
}
`