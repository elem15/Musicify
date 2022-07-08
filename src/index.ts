import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import userResolvers from './modules/users/resolvers';
import genreResolvers from './modules/genres/resolvers';
import artistResolvers from './modules/artists/resolvers'
import bandResolvers from './modules/bands/resolvers'

import query from './query';
import mutation from './mutation';
import usersSchema from './modules/users/schema';
import genresSchema from './modules/genres/schema';
import artistsSchema from './modules/artists/schema';
import bandsSchema from './modules/bands/schema';
import 'dotenv/config'

const PORT = process.env.PORT || 4000;

const schema = buildSchema(`
  ${query}
  ${mutation}
  ${usersSchema}
  ${genresSchema}
  ${artistsSchema}
  ${bandsSchema}
  `);
  
export const auth = {
  token: '',
};


const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: {...genreResolvers, 
    ...userResolvers, 
    ...artistResolvers,
    ...bandResolvers
  },
  graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);