


// src/components/featured-slider/FeaturedSlider.tsx
import { useState } from 'react'
import type { FeaturedSliderProps } from '@/types'
import * as S from './FeaturedSlider.styles'


export function FeaturedSlider<TItem>({ items, getKey, renderItem }: FeaturedSliderProps<TItem>) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (items.length === 0) return null

  const activeItem = items[activeIndex]

  return (
    <S.FeaturedSlider>
      <S.Slide>
        {renderItem(activeItem, activeIndex)}
      </S.Slide>

      <S.Controls>
        <S.Dots>
          {items.map((item, index) => (
            <button
              key={getKey(item)}
              type="button"
              aria-label={`Ir para slide ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </S.Dots>
      </S.Controls>
    </S.FeaturedSlider>
  )
}