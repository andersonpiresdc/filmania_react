import { useEffect, useState }  from 'react';
import './filme-info.css';
import { useParams, useNavigate } from 'react-router-dom';
/* O useHistory na versão 6 do reactrouter foi substituido pelo useNavigate 
   verificar o link: https://reactrouter.com/docs/en/v6/upgrading/v5#upgrading-from-v5*/
import api from '../../services/api';
import { toast } from 'react-toastify';

function Filme(){
   const {id} = useParams();
   const navigate = useNavigate();
   const [filme, setFilme] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      
      async function loadFilme(){
         await api.get(`/movie/${id}`, {
            params:{
               api_key: "870388bf66636a9fe37a9f798aaf8240",
               language: "pt-BR"
            }
         })
         .then((response)=>{
            setFilme(response.data);
            setLoading(false);
            // console.log(response.data);
         })
         .catch(()=>{
            navigate("/", {replace: true});
            return;
            // console.log("FILME NÃO ENCONTRADO")
         })

         // setFilme();
         // setLoading(false);
      }

      loadFilme();

      return() => {
         console.log('COMPONENTE DESMONTADO');
      }

   }, [navigate, id]);


   function salvarFilme(){
      const minhaLista = localStorage.getItem("@primeFlix");

      let filmesSalvos = JSON.parse(minhaLista) || [];

      const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id);

      if(hasFilme){
         toast.warn("Esse filme já encontra-se cadastrado!");
         return;
      }
      
      filmesSalvos.push(filme);
      localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos));
      toast.success("Filme salvo com sucesso!");
   }

   if (loading){
      return(
         <div className='filme-info'>
            <h1>Carregando seu filme...</h1>
         </div>
      )   
   }

   return(
      <div className='filme-info'>
         <h1>{filme.title}</h1>
         <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title}/>
         <h3>Sinopse</h3>
         <span>{filme.overview}</span>
         <strong>Avaliação: {filme.vote_average}</strong>

         <div className="area-buttons">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
               <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
            </button>
            <button>
               <a href="/">Voltar</a>
            </button>
         </div>
     </div>
   )
}

export default Filme;