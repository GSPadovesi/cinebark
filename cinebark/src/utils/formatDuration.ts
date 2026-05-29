export function formatDuration(minutes?: number) {
  if (minutes === undefined || minutes === null) return ''

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  return `${hours}h ${mins}m`
}