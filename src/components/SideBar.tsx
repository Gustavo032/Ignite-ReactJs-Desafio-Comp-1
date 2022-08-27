import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import '../styles/sidebar.scss';
import { useMovies } from "../MoviesContext";


interface GenreResponseProps {
  id: number;
  name: 'action' | 'manga' | 'magia' | 'romance' | 'family';
  title: string;
}


export function SideBar() {
  // Complete aqui

  const {handleClickButton, selectedGenreId} = useMovies()

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return(

		<nav className="sidebar">
			<span>Read<p>Me</p></span>

			<div className="buttons-container">
				{genres.map(genre => (
				<Button
					key={String(genre.id)}
					title={genre.title}
					iconName={genre.name}
					onClick={() => handleClickButton(genre.id)}
					selected={selectedGenreId === genre.id}
				/>
				))}
			</div>

		</nav>
	);
}