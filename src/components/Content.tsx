import { MovieCard } from "./MovieCard";

interface MovieProps {
  movies: {
    imdbID: string
    Title: string
    Poster: string
    Ratings: Array<{
      Source: string
      Value: string
    }>;
    Runtime: string
  }[]
}

export function Content(props: MovieProps) {
  // Complete aqui
  return (
    <div className="movies-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>)
}