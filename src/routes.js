import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const Rotas = () => {
   return(
      <BrowserRouter>
         <Header/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route exact path="/filme/:id" element={<Filme/>}/>
            <Route exact path="/favoritos" element={<Favoritos/>}/>

            <Route path="*" element={<Erro/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default Rotas;