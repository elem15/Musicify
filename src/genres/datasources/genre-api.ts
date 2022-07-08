import {RESTDataSource} from 'apollo-datasource-rest';

import 'dotenv/config'

const URL: string = process.env.GENRES_URL || '';

export default class GenreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = URL;
  }
  getGenres() {
    return this.get('/');
  }
  // getGenres(limit: number, offset: number) {
  //   return this.get(`?limit=${limit}&offset=${offset}`);
  // }
 
  // getGenre(genreId: string) {
  //   return this.get(`/${genreId}`);
  // }
}