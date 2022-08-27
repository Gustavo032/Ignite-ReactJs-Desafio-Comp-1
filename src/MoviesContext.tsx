import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import {api} from './services/api'

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
		api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
		setMovies(response.data);
		});

		api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
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