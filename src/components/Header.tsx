interface selectedGenreProps {
	selectedGenre : {
		id: number;
		name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
		title: string;

	}
}

export function Header({selectedGenre}:selectedGenreProps){
	// Bonus :)
	return(
		<span className="category">Categoria:<span> {selectedGenre.title}</span></span>
	);
}