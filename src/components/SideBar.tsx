import { Button } from './Button';

interface GenreProps {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[]
  selectedGenreId: number
  handleClickButton: (id: number) => void
}

export function SideBar(props: GenreProps) {
  // Complete aqui

  return (
    <>{
      props.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))
    }
    </>)
}