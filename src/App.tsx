import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

import './styles/global.scss';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  const handleClickButton = (id: number) => {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>

      <div className="container">
        <header>
			<Header selectedGenre={selectedGenre}/>
        </header>

        <main>
			<Content selectedGenreId={selectedGenreId} setSelectedGenre={setSelectedGenre} setSelectedGenreId={setSelectedGenreId}/>
        </main>
      </div>
    </div>
  )
}