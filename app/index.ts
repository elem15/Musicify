import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { graphqlHTTP } from 'express-graphql';
import 'dotenv/config'
import genreSchema from './modules/genres/schema';
import usersSchema from '../src/users/schema';
import genresResolvers from './modules/genres/resolvers'
import usersResolvers from '../src/users/resolvers';
import GenreAPI from './modules/genres/datasources/genre-api';
import { readFileSync } from 'fs'
const typeDefs = readFileSync(path.join(__dirname, './modules/genres/schema.graphql'), 'utf8');
import { buildSchema } from 'graphql';

const PORT = +process.env.PORT || 4000;
const schema = buildSchema(typeDefs);
export const auth = {
  token: '',
};

const server = new ApolloServer({
  typeDefs: genreSchema,
  resolvers: genresResolvers,
  dataSources: () => {
    return {
      genreAPI: new GenreAPI()
    };
  }
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
// const app = express();
// app.use('/graphql', graphqlHTTP({
//   schema,
//   rootValue: {...usersResolvers, ...genresResolvers},
//   graphiql: true,
//   dataSources: () => {
//     return {
//       trackAPI: new TrackAPI()
//     };
//   }
// }));
// app.listen(PORT);
// console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);