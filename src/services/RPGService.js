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

  getGB: () => {
    return axios.get('http://localhost:8080/api/v1/gb');
  },

  getGBA: () => {
    return axios.get('http://localhost:8080/api/v1/gba');
  },

  getGBC: () => {
    return axios.get('http://localhost:8080/api/v1/gbc');
  },

  getGC: () => {
    return axios.get('http://localhost:8080/api/v1/gc');
  },

  getNES: () => {
    return axios.get('http://localhost:8080/api/v1/nes');
  },

  get3DS: () => {
    return axios.get('http://localhost:8080/api/v1/3ds');
  },

  getDS: () => {
    return axios.get('http://localhost:8080/api/v1/ds');
  },

  getSwitch: () => {
    return axios.get('http://localhost:8080/api/v1/switch');
  },

  getPC: () => {
    return axios.get('http://localhost:8080/api/v1/pc');
  },

  getPC98: () => {
    return axios.get('http://localhost:8080/api/v1/pc98');
  },

  getPS1: () => {
    return axios.get('http://localhost:8080/api/v1/ps1');
  },

  getPS2: () => {
    return axios.get('http://localhost:8080/api/v1/ps2');
  },

  getPS3: () => {
    return axios.get('http://localhost:8080/api/v1/ps3');
  },

  getPS4: () => {
    return axios.get('http://localhost:8080/api/v1/ps4');
  },

  getPS5: () => {
    return axios.get('http://localhost:8080/api/v1/ps5');
  },

  getPSP: () => {
    return axios.get('http://localhost:8080/api/v1/psp');
  },

  getSNES: () => {
    return axios.get('http://localhost:8080/api/v1/snes');
  },

  getWii: () => {
    return axios.get('http://localhost:8080/api/v1/wii');
  },

  getWiiU: () => {
    return axios.get('http://localhost:8080/api/v1/wiiu');
  },
  getunknowrpg: () => {
    return axios.get('http://localhost:8080/api/v1/unknowrpg');
  },
  getADV: () => {
    return axios.get('http://localhost:8080/api/v1/adv');
  },
  getARPG: () => {
    return axios.get('http://localhost:8080/api/v1/arpg');
  },
  getCARD: () => {
    return axios.get('http://localhost:8080/api/v1/card');
  },
  getCRPG: () => {
    return axios.get('http://localhost:8080/api/v1/crpg');
  },
  getDRPG: () => {
    return axios.get('http://localhost:8080/api/v1/drpg');
  },
  getHRPG: () => {
    return axios.get('http://localhost:8080/api/v1/hrpg');
  },
  getHSLG: () => {
    return axios.get('http://localhost:8080/api/v1/hslg');
  },
  getMMO: () => {
    return axios.get('http://localhost:8080/api/v1/mmo');
  },
  getROGUE: () => {
    return axios.get('http://localhost:8080/api/v1/rogue');
  },
  getSHOOT: () => {
    return axios.get('http://localhost:8080/api/v1/shoot');
  },
  getSIM: () => {
    return axios.get('http://localhost:8080/api/v1/sim');
  },
  getSRPG: () => {
    return axios.get('http://localhost:8080/api/v1/srpg');
  },
  getTRPG: () => {
    return axios.get('http://localhost:8080/api/v1/trpg');
  },
};

export default RPGService;
