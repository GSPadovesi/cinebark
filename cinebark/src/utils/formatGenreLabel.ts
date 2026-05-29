import type { CardProps } from "@/types"
import { formatGenre } from "./formatGenre"

export function formatGenreLabel(genres?: CardProps['genres'], genre?: CardProps['genre']) {
  const value = genres || genre

  if (Array.isArray(value)) {
    return value.map((item) => formatGenre(String(item))).join(', ')
  }

  return formatGenre(String(value || ''))
}