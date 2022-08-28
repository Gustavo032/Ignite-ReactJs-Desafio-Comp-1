import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from "axios";
interface GenreResponseProps {
  id: number;
  name: 'action' | 'manga' | 'magia' | 'romance' | 'family';
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Value: string;
  }>;
  Year: string;
}

interface MoviesProviderProps {
  children: ReactNode
}

interface MoviesContextData {
  selectedGenre:GenreResponseProps;
  selectedGenreId:number;
  movies: MovieProps[];
  handleClickButton: (id:number) => void;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

export function MoviesProvider({children}: MoviesProviderProps) {
// tirado do content:
  	const [movies, setMovies] = useState<MovieProps[]>([]);
  
//   tirado do app:
	const [selectedGenreId, setSelectedGenreId] = useState(1);
	const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

	useEffect(() => {
		axios.get<MovieProps[]>(`https://server-read-me.vercel.app/movies/genreId${selectedGenreId}.json/`).then(response => {
		setMovies(response.data);
		});

		axios.get<GenreResponseProps>(`https://server-read-me.vercel.app/genres/${selectedGenreId}/db.json/`).then(response => {
		setSelectedGenre(response.data);
		})
	}, [selectedGenreId]);

	// app:
	function handleClickButton(id: number) {
		setSelectedGenreId(id);
	}

	return (
		<MoviesContext.Provider value={{selectedGenreId, selectedGenre, handleClickButton, movies}}>
		{children}
		</MoviesContext.Provider>
	)
}

export function useMovies() {
  const context = useContext(MoviesContext);

  return context
}