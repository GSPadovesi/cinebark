export function formatGenre(genre?: string) {
  if (!genre) return ''

  const genres: Record<string, string> = {
    ACTION: 'Acao',
    ADVENTURE: 'Aventura',
    ANIMATION: 'Animacao',
    COMEDY: 'Comedia',
    DRAMA: 'Drama',
    FANTASY: 'Fantasia',
    HORROR: 'Terror',
    ROMANCE: 'Romance',
    SCIENCE_FICTION: 'Ficcao cientifica',
    THRILLER: 'Suspense',
  }

  return genres[genre] || genre
}