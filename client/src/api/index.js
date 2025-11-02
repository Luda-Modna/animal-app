import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:3000/api' });

export const getTypes = () => httpClient.get('/petTypes');

export const createPet = values => httpClient.post('/pets', values);
