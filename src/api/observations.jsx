import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URL,
});

const allObservations = (rucheId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.get(`/observations/${rucheId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const oneObservation = (observationId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.get(`/observations/${observationId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const createObservation = (data) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.post(`/observations`, data);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const updateObservation = (data, observationId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.put(`/observations/${observationId}`, data);
        resolve(response.data);
        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });

const deleteObservation = (observationId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.delete(`/observations/${observationId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const deleteAll = (rucheId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.delete(`/observations/${rucheId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

export {
  allObservations,
  oneObservation,
  createObservation,
  updateObservation,
  deleteObservation,
  deleteAll,
};
