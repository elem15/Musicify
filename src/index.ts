import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import userResolvers from './users/resolvers';
import genreResolvers from './genres/resolvers';
import query from './query';
import usersSchema from './users/schema';
import genresSchema from './genres/schema'
import 'dotenv/config'

const PORT = process.env.PORT || 4000;

const schema = buildSchema(`
  ${query}
  ${usersSchema}
  ${genresSchema}
  type DeleteResponse {
    acknowledged: Boolean,
    deletedCount: Int
}
  `);

export const auth = {
  token: '',
};


const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: {...genreResolvers, ...userResolvers},
  graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);