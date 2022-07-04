import { baseApi } from './backRouting';

const allVisitsByHive = (rucheId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.get(`/visits/${rucheId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const allVisits = () =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.get(`/visits`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const allActions = () =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.get(`/visits/actions`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const oneVisit = (visitId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.get(`/visits/${visitId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const createVisit = (data) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.post(`/visits`, data);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

const updateVisit = (data, visitId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.put(`/visits/${visitId}`, data);
        resolve(response.data);
        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });

const deleteVisit = (visitId) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await baseApi.delete(`/visits/${visitId}`);
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
        const response = await baseApi.delete(`/visits/${rucheId}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

export {
  allVisits,
  allVisitsByHive,
  allActions,
  oneVisit,
  createVisit,
  updateVisit,
  deleteVisit,
  deleteAll,
};
