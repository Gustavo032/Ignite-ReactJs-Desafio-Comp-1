import { MovieCard } from "./MovieCard";
import '../styles/content.scss';
import { useEffect, useState } from "react";
import { useMovies } from "../MoviesContext";
interface MovieProps {
	imdbID: string;
	Title: string;
	Poster: string;
	Ratings: Array<{
		Value: string;
	}>;
	Year: string;
}
interface GenreResponseProps {
	id: number;
	name: 'action' | 'manga' | 'magia' | 'romance' | 'family';
	title: string;
}


export function Content() {

  const { movies } = useMovies()

  return(
	<div className="movies-list">
		{movies.map((movie:any) => {
			return(
				<MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} rating={movie.Ratings[0].Value} />
			)
		})}
	</div>
  );
}