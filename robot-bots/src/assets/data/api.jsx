import axios from 'axios';

const BASE_URL = 'http://localhost:3000/bots';

export const getBots = async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  };
  
  
export const getBotList = () => {
  return axios.get(`${BASE_URL}`).then((response) => response.data);
};

export const getBotById = (botId) => {
  return axios.get(`${BASE_URL}/${botId}`).then((response) => response.data);
};

export const updateBot = (botId, botData) => {
  return axios.put(`${BASE_URL}/${botId}`, botData).then((response) => response.data);
};

export const deleteBot = (botId) => {
  return axios.delete(`${BASE_URL}/${botId}`).then((response) => response.data);
};
