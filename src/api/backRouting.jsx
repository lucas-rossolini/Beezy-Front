import axios from 'axios';

/**
 * Url de base pour chaque requete vers la REST API
 */
const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URL,
});

export default baseApi;
