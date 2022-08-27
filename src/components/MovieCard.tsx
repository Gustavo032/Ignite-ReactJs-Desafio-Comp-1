import { memo } from 'react';
import { Star, Calendar } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  year: string;
}

function MovieCardComponent(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Calendar /> {props.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MovieCard = memo(MovieCardComponent, (prevProps, nextProps)=>{
	return Object.is(prevProps, nextProps)
})