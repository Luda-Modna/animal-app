import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({ baseURL: 'http://localhost:3000/api' });

export const getTypes = () => httpClient.get('/petTypes');

export const createPet = values => httpClient.post('/pets', values);

export const getPets = filter =>
  httpClient.get(`/pets?${queryString.stringify(filter)}`);

export const deletePet = id => httpClient.delete(`/pets/${id}`);

export const updatePet = (id, values) =>
  httpClient.patch(`/pets/${id}`, values);
