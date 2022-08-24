import { MovieCard } from "./MovieCard";
import '../styles/content.scss';
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useMovies } from "../MoviesContext";
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


export function Content() {

  const { movies } = useMovies()

  return(
	<div className="movies-list">
		{movies.map((movie:MovieProps) => {
			return(
				<MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
			)
		})}
	</div>
  );
}