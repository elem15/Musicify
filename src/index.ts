import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import rootValue from './graphql/root-value';
import schema from './graphql/schema';

import 'dotenv/config'

const PORT = process.env.PORT || 4000;

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);