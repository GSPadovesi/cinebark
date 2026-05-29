export function formatGenre(genre?: string) {
  if (!genre) return ''

  const genres: Record<string, string> = {
    ACTION: 'Acao',
    ADVENTURE: 'Aventura',
    ANIMATION: 'Animacao',
    BIOGRAPHY: 'Biografia',
    COMEDY: 'Comedia',
    CRIME: 'Crime',
    DRAMA: 'Drama',
    FANTASY: 'Fantasia',
    HORROR: 'Terror',
    ROMANCE: 'Romance',
    SCIENCE_FICTION: 'Ficcao cientifica',
    THRILLER: 'Suspense',
    DOCUMENTARY: 'Documentario',
    FAMILY: 'Familia',
    HISTORY: 'Historia',
    MUSIC: 'Musica',
    MUSICAL: 'Musical',
    MYSTERY: 'Misterio',
    SPORT: 'Esporte',
    WAR: 'Guerra',
    WESTERN: 'Oeste'
  }

  return genres[genre] || genre
}