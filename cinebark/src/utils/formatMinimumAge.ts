export function formatMinimumAge(minimumAge: number | undefined){
  if(minimumAge === undefined) return null
  if (minimumAge === 0) return 'L'
  return String(minimumAge)
}