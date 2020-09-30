import axios from 'axios';

export const apiFake = axios.create({ baseURL: 'http://localhost:3333' });

export const api = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/',
});
