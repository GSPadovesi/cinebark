import type { TextFieldProps } from '@mui/material/TextField'
import type { FileInputProps } from './FileInput'

export type InputType = 'text' | 'select' | 'file'

export type InputOption = {
  label: string
  value: string | number
  disabled?: boolean
}

export type TextInputProps = Omit<TextFieldProps, 'children' | 'select' | 'type'> & {
  type?: 'text'
  options?: never
}

export type SelectInputProps = Omit<TextFieldProps, 'children' | 'select' | 'type'> & {
  type: 'select'
  options?: Array<InputOption | string>
}

export type InputProps =
  | TextInputProps
  | SelectInputProps
  | (FileInputProps & {
      type: 'file'
      options?: never
    })
