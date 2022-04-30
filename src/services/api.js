import axios from 'axios';
//Base URL > https://sujeitoprogramador.com/
// Rota > r-api/?api=filmes/ (Todos os filmes)

const api = axios.create({
   baseURL: 'https://sujeitoprogramador.com'
});

export default api;