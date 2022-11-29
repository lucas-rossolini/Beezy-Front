import { baseApi } from './backRouting';

const allHives = () =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.get(`/hives`, {});
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const allHivesGrouped = () =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.get(`/hives/group-by-state`, {});
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const oneHive = (hiveId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.get(`/hives/${hiveId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const lastObservHive = () =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.get(`/hives/lastObserv`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const createHive = (data) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.post(`/hives`, data);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const updateHive = (data, hiveId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.put(`/hives/${hiveId}`, data);
        resolve(response.data);
        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });

const deleteHive = (hiveId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.delete(`/hives/${hiveId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

export {
  allHives,
  allHivesGrouped,
  oneHive,
  lastObservHive,
  createHive,
  updateHive,
  deleteHive,
};
