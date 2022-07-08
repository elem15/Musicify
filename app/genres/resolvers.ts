import axios from 'axios';
import 'dotenv/config'
import { auth } from '../../index';

const genresURL: string = process.env.GENRES_URL || '';

type Genre = {
  name: string
  description: string
  country: String
  year: number
}
type Pagination = {
  limit: number
  offset: number
}


export default {
  Query: {
    genres: (__, _, { dataSources }) => {
      console.log(dataSources.genreAPI.getGenres)
      return dataSources.genreApi.getGenres();
    },
    // genre: ({ id }: { id: string }, _, { dataSources }) => {
    //   return dataSources.genreApi.getGenre(id);
    // },
  },
  // Genre: {
  //   genre: ({ genreId }, _, { dataSources }) => {
  //     return dataSources.genreApi.getGenre(genreId);
  //   },
  // }
  // createGenre: async ({ name, description, country, year }: Genre) => {
  //   const response = await axios.post(genresURL,
  //     { name, description, country, year },
  //     {
  //       headers: {
  //         'Authorization': `Basic ${auth.token}`
  //       }
  //     });
  //   return response.data;
  // },  
};