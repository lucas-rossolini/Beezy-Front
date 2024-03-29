import axios from 'axios';

const setCookie = (data) => {
  document.cookie = `username=${data}; path=/; expires=${new Date(
    Date.now() + 3600000 * 24 * 14 // Cookie expire after 14 days
  ).toUTCString()}; Domain=${document.domain}`;
};

const deleteCookie = (data) => {
  document.cookie = `username=${data}; path=/; expires=${new Date(
    Date.now() - 3600000 * 24 * 14 // Cookie expire after 14 days
  ).toUTCString()}; Domain=${document.domain}`;
};

const getCookie = () => {
  const cook = document.cookie
    ?.split('; ')
    .find((row) => row.startsWith('username='))
    ?.split('=')[1];

  return cook;
};
/**
 * Url de base pour chaque requete vers la REST API
 */
const token = getCookie();
const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URL,
  headers: {
    Authorization: `${token}`,
  },
});

export { setCookie, deleteCookie, getCookie, baseApi };
