import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URL,
});

const allHives = () =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.get(`/hives`);
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
        const response = await api.get(`/hives/${hiveId}`);
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
        const response = await api.get(`/hives/lastObserv`);
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
        const response = await api.post(`/hives`, data);
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
        const response = await api.put(`/hives/${hiveId}`, data);
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
        const response = await api.delete(`/hives/${hiveId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

export {
  allHives,
  oneHive,
  lastObservHive,
  createHive,
  updateHive,
  deleteHive,
};
