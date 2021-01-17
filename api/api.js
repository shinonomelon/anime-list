import {create} from 'axios';

const api = create({
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  baseURL: "http://api.moemoe.tokyo/anime/v1/master/",
  responseType: 'json',
  timeout: 10000,
});


api.getYear = (year) =>
  api.get(`/${year}`);

api.getSeason = (year,season) =>
  api.get(`/${year}/${season}`);

api.getPostsByUserId = (id) =>
  api.get(`/1?id=${id}`);

export default api;
