import axios from 'axios';
import 'dotenv/config'
import { auth } from '../../auth';

const favoritesURL: string = process.env.FAVOURITES_URL || '';

interface Favorite {
  _id: string
  userId: string
  bandsIds: string[]
  genresIds: string[]
  artistsIds: string[]
  tracksIds: string[]
}
type FavoriteItemId = {
  id: string
}
enum UpdatedItem {
  GENRES = "genres",
  BANDS = "bands", 
  ARTISTS = "artists",
  TRACK = "tracks"
}

export default {
  favorites: async () => {
    const response = await axios.get(favoritesURL,
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  addGenresToFavorite: async ({ id }: FavoriteItemId) => {
    const response = await axios.put(`${favoritesURL}/add`,
      { type: "genres", id },
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  addBandsToFavorite: async ({ id }: FavoriteItemId) => {
    const response = await axios.put(`${favoritesURL}/add`,
      { type: UpdatedItem.BANDS, id },
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  addArtistsToFavorite: async ({ id }: FavoriteItemId) => {
    const response = await axios.put(`${favoritesURL}/add`,
      { type: UpdatedItem.ARTISTS, id },
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  addTracksToFavorite: async ({ id }: FavoriteItemId) => {
    const response = await axios.put(`${favoritesURL}/add`,
      { type: UpdatedItem.TRACK, id },
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
};