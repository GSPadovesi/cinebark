import {
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { forwardRef, useId } from 'react'
import type { InputProps } from '@/types'

export const TextInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(
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
      value = '',
    },
    ref
  ) => {
    const inputId = useId()

    return (
      <Box
        sx={{
          width: fullWidth ? '100%' : 260,
        }}
      >
        {label && (
          <Typography
            sx={{
              mb: 0.8,
              color: 'rgba(255,255,255,0.58)',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {label}
          </Typography>
        )}

        <FormControl
          disabled={disabled}
          error={error}
          fullWidth
          required={required}
          size={size}
          sx={sx}
        >
          <OutlinedInput
            inputRef={ref}
            id={inputId}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            sx={{
              height: 52,
              borderRadius: '14px',

              color: '#fff',

              background:
                'linear-gradient(180deg, rgba(11,15,25,0.96), rgba(5,8,15,0.98))',

              '& fieldset': {
                borderColor: 'rgba(255,255,255,0.08)',
              },

              '&:hover fieldset': {
                borderColor: 'rgba(212,160,23,0.32)',
              },

              '&.Mui-focused fieldset': {
                borderColor: '#d4a017',
              },

              '& input': {
                px: '14px',
                fontSize: 14,
                fontWeight: 600,
              },

              '& input::placeholder': {
                color: 'rgba(255,255,255,0.35)',
                opacity: 1,
              },
            }}
          />

          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      </Box>
    )
  },
)

TextInput.displayName = 'TextInput'