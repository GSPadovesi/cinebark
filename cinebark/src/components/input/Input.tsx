import { forwardRef } from 'react'
import { TextInput } from './TextInput'
import { SelectInput } from './SelectInput'
import type { InputProps } from '@/types'

export const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ type = 'text', ...props }, ref) => {
    switch (type) {
      case 'select':
        return <SelectInput ref={ref} {...props} />

      case 'text':
      default:
        return <TextInput {...props} />
    }
  },
)

Input.displayName = 'Input'
