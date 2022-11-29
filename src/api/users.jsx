import { baseApi } from './backRouting';

const createUser = (data) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.post(`/create-user`, data);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

export default createUser;
