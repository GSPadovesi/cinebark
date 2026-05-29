import type { ReactNode } from "react"

export type FeaturedSliderProps<TItem> = {
  items: TItem[]
  getKey: (item: TItem) => string
  renderItem: (item: TItem, index: number) => ReactNode
}