import axios from 'axios';

const api = axios.create({baseURL: 'http://api.salic.cultura.gov.br/v1/'
});

export default api;