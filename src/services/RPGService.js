import axios from 'axios';

const RPGService = {
  getRPG: () => {
    return axios.get('http://localhost:8080/api/v1/rpg');
  },
};

export default RPGService;
