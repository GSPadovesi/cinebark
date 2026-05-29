import type { ChangeEventHandler, InputHTMLAttributes } from 'react'
import type { SxProps, Theme } from '@mui/material/styles'

export type FileInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> & {
  type?: 'file'
  label?: string
  helperText?: string
  error?: boolean
  fullWidth?: boolean
  size?: 'small' | 'medium'
  sx?: SxProps<Theme>
  value?: never
  onChange?: ChangeEventHandler<HTMLInputElement>
}
