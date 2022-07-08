import { buildSchema } from 'graphql';
import { gql } from 'apollo-server'

// export default gql`
export default `type JWT {
    jwt: String
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    password: String
    email: String
  }`

  // `;

