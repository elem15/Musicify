
import userResolvers from '../modules/users/resolvers';
import genreResolvers from '../modules/genres/resolvers';
import artistResolvers from '../modules/artists/resolvers'
import bandResolvers from '../modules/bands/resolvers';
import trackResolvers from '../modules/tracks/resolvers';
import albumResolvers from '../modules/albums/resolvers';
import favoriteResolvers from '../modules/favorites/resolvers';

export default {
  ...userResolvers, 
  ...genreResolvers, 
  ...artistResolvers,
  ...bandResolvers,
  ...trackResolvers,
  ...albumResolvers,
  ...favoriteResolvers,
}