// API -> https://sujeitoprogramador.com/r-api/?api=filmes/

import Rotas from './routes';
import './style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
     <div className="app">
        <ToastContainer autoClass={3000}/>
        <Rotas/>
     </div>
  );
}

export default App;
