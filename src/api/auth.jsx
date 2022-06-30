import { baseApi, getCookie } from './backRouting';

const authUser = (email, password) =>
  baseApi.post(`/auth`, { email, password });

const isLogged = () => getCookie();

const logout = () => baseApi.post(`/logout`);

export { authUser, isLogged, logout };
