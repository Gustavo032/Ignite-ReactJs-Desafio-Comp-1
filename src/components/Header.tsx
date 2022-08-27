import { memo } from "react";
import { useMovies } from "../MoviesContext";

interface selectedGenreProps {
	selectedGenre : {
		id: number;
		name: 'action' | 'manga' | 'magia' | 'romance' | 'family';
		title: string;

	}
}
function HeaderComponent(){
	const {title} = useMovies().selectedGenre
	// Bonus :)
	return(
		<span className="category">Categoria:<span> {title}</span></span>
	);
}

export const Header = memo(HeaderComponent, (prevProps, nextProps)=>{
	return Object.is(prevProps, nextProps)
})