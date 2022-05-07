import axios from 'axios';
//Base URL > https://api.themoviedb.org/3/
//Base URL > https://sujeitoprogramador.com/
// Rota > r-api/?api=filmes/ (Todos os filmes)
// https://api.themoviedb.org/3/movie/550?api_key=870388bf66636a9fe37a9f798aaf8240

const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/'
});

export default api;