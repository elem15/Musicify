import { buildSchema } from 'graphql';

import query from './query';
import mutation from './mutation';
import usersSchema from '../modules/users/schema';
import genresSchema from '../modules/genres/schema';
import artistsSchema from '../modules/artists/schema';
import bandsSchema from '../modules/bands/schema';
import tracksSchema from '../modules/tracks/schema';
import albumsSchema from '../modules/albums/schema';
import favoritesSchema from '../modules/favorites/schema';

export default buildSchema(`
  ${query}
  ${mutation}
  ${usersSchema}
  ${genresSchema}
  ${artistsSchema}
  ${bandsSchema}
  ${tracksSchema}
  ${albumsSchema}
  ${favoritesSchema}
  `);