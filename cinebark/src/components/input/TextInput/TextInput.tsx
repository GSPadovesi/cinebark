import { Box, FormControl, FormHelperText, OutlinedInput, Typography } from '@mui/material'
import { forwardRef, useId } from 'react'
import type { TextInputProps } from '@/types'
import * as S from './TextInput.styles'

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      disabled,
      error,
      fullWidth = false,
      helperText,
      label,
      name,
      onChange,
      placeholder,
      required,
      size = 'medium',
      sx,
      type = 'text',
      value = '',
    },
    ref
  ) => {
    const inputId = useId()

    return (
      <Box sx={[S.rootSx(fullWidth), ...(Array.isArray(sx) ? sx : [sx])]}>
        {label && (<Typography sx={S.labelSx}>{label}</Typography>)}
        <FormControl
          disabled={disabled}
          error={error}
          fullWidth
          required={required}
          size={size}
        >
          <OutlinedInput
            inputRef={ref}
            id={inputId}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />

          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      </Box>
    )
  },
)

TextInput.displayName = 'TextInput'
