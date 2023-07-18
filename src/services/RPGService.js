import axios from 'axios';

const RPGService = {
  getRPGname: () => {
    return axios.get('http://localhost:8080/api/v1/rpgname');
  },

  getRPGsupport: () => {
    return axios.get('http://localhost:8080/api/v1/rpgsupport');
  },

  getRPGgenre: () => {
    return axios.get('http://localhost:8080/api/v1/rpggenre');
  },

  getRPGdeveloper: () => {
    return axios.get('http://localhost:8080/api/v1/rpgdeveloper');
  },
};

export default RPGService;
