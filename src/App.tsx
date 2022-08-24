import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './MoviesContext';
import { Header } from './components/Header';
import './styles/global.scss';

export function App() {

  return (
	<MoviesProvider>
		<div style={{ display: 'flex', flexDirection: 'row' }}>
		<SideBar/>

		<div className="container">
			<header>
				<Header />
			</header>

			<main>
				<Content />
			</main>
		</div>
		</div>
	</MoviesProvider>
  )
}