// Implementation of the "Facade Pattern"

import axios from 'axios';

const API_URL = 'https://us-central1-rental-app-60a86.cloudfunctions.net';
const LOCAL_URL = 'http://127.0.0.1:5001/rental-app-60a86/us-central1';

const api = axios.create({
  baseURL: API_URL,
});

export const get = async (path, params = {}) => {
  try {
    const response = await api.get(path, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const post = async (path, data = {}) => {
  try {
    const response = await api.post(path, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const put = async (path, data = {}) => {
  try {
    const response = await api.put(path, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const del = async (path) => {
  try {
    const response = await api.delete(path);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// To reference within a component:
// import { get, post } from './api';

// async function fetchData() {
//   try {
//     const data = await get('/data', { limit: 10 });
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function createData() {
//   try {
//     const data = await post('/data', { name: 'John Doe', email: 'john@example.com' });
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();
// createData();
