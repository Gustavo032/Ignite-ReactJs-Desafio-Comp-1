import { MovieCard } from "./MovieCard";
import '../styles/content.scss';
import { useEffect, useState } from "react";
import { api } from "../services/api";
// interface ContentMovieProps {
// 	movies:{
// 		imdbID: string;
// 		Title: string;
// 		Poster: string;
// 		Ratings: Array<{
// 			Source: string;
// 			Value: string;
// 		}>;
// 		Runtime: string;
// 		map: Function;
// 	};
// }


interface MovieProps {
	imdbID: string;
	Title: string;
	Poster: string;
	Ratings: Array<{
		Source: string;
		Value: string;
	}>;
	Runtime: string;
}
interface GenreResponseProps {
	id: number;
	name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
	title: string;
}
  
  
export function Content({selectedGenreId, setSelectedGenre, setSelectedGenreId}:any) {
  // Complete aqui  

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);
  
  return(
	<div className="movies-list">
		{movies.map((movie:MovieProps) => {
			return( 
				<MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
			)
		})}
	</div>
  );
}