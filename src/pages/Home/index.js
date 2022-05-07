// API -> https://sujeitoprogramador.com/r-api/?api=filmes/
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

// https://api.themoviedb.org/3/movie/550?api_key=870388bf66636a9fe37a9f798aaf8240

function Home() {
	const [filmes, setFilmes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadFilmes() {
			const response = await api.get("movie/now_playing", {
				params: {
					api_key: "870388bf66636a9fe37a9f798aaf8240",
					language: "pt-BR",
					page: 1,
				},
			});
			// console.log(response.data);
			setFilmes(response.data.results.slice(0, 10));
         setLoading(false);
		}

		loadFilmes();
	}, []);
   
   if(loading){
      return(
         <div>
            <h2 className="Loading">Carregando filmes...</h2>
         </div>
      )
   }

	return (
		<div className="container">
			<div className="lista-filmes">
				{filmes.map((filme) => {
					return (
						<article key={filme.id}>
							<strong>{filme.title}</strong>
							<img
								src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
								alt={filme.title}
							></img>
							<Link to={`/filme/${filme.id}`}>Acessar</Link>
						</article>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
