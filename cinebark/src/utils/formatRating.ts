export function formatRating(rating?: string | number) {
  if (rating === undefined || rating === null || rating === '') return ''
  if (rating === 0 || rating === '0') return 'Livre'

  return String(rating)
}