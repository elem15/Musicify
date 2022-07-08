export default `
type Query {  
  register( 
    firstName: String,
    lastName: String,
    password: String,
    email: String      
    ): User   
  jwt(    
    password: String,
    email: String      
    ): JWT   
  genre(id: ID!): Genre
  genres(limit: Int, offset: Int): [Genre] 
}`