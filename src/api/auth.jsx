import { baseApi, getCookie } from './backRouting';

const authUser = (email, password) => {
  const token = baseApi.post(`/auth`, { email, password });
  return token;
};

const isLogged = () => getCookie();

const logout = () => {
  baseApi.post(`/auth/logout`);
};

export { authUser, isLogged, logout };
