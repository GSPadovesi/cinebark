import { forwardRef, type Ref } from 'react'
import { TextInput } from './TextInput'
import { SelectInput } from './SelectInput'
import { FileInput } from './FileInput'
import type { InputProps } from '@/types'

export const Input = forwardRef<HTMLInputElement | HTMLDivElement, InputProps>((props, ref) => {
  switch (props.type) {
    case 'select':
      return <SelectInput ref={ref as Ref<HTMLDivElement>} {...props} />

    case 'file':
      return <FileInput ref={ref as Ref<HTMLInputElement>} {...props} />

    case 'text':
    default:
      return <TextInput ref={ref as Ref<HTMLInputElement>} {...props} />
  }
})

Input.displayName = 'Input'
