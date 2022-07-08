import axios from 'axios';
import 'dotenv/config';
import { auth } from '../../index';

const usersURL: string = process.env.USERS_URL || '';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export default {
  register: async ({
    firstName,
    lastName,
    password,
    email
  }: User) => {
    const response = await axios.post(`${usersURL}/register`, {
      firstName,
      lastName,
      password,
      email
    });
    return response.data;
  },

  jwt: async ({
    password,
    email
  }: User) => {
    const response = await axios.post(`${usersURL}/login`, {
      password,
      email
    });
    auth.token = response.data.jwt
    return response.data;
  },

  getById: async ({ id }: { id: number}) => {
    const response = await axios.get(`${usersURL}/${id}`);
    return response.data;
  },

};