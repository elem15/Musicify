export default `
type Artist {
  _id: ID!
  firstName: String
  secondName: String
  middleName: String
  birthDate: String
  birthPlace: String
  country: String
  bands: [Band]
  instruments: [String]
}

`