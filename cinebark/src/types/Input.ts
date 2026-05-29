import type { TextFieldProps } from '@mui/material/TextField'

export type InputType = 'text' | 'select'

export type InputOption = {
  label: string
  value: string | number
  disabled?: boolean
}

export type InputProps = Omit<TextFieldProps, 'children' | 'select' | 'type'> & {
  type?: InputType
  options?: Array<InputOption | string>
}
