import axios from "axios";


const apiBaseURL = 'http://localhost:3001';

const api = axios.create({ baseURL: apiBaseURL });

export const getEventos = async () => {
  const res = await api.get('/evento');
  return res.data;
};

export const addEvento = async (data) => {
  const res = await api.post('/evento', data);
  return res.data;
};

export const deleteEvento = async (evenId) => {
  const res = await api.get(`/evento/${evenId}/delete`);
  return res.data;
};