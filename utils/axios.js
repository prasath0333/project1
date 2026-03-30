import axios from 'axios';

export default function getInstance() {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  });
}
