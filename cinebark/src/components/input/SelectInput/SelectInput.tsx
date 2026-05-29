import { Box, FormControl, FormHelperText, MenuItem, Select, Typography, type SelectChangeEvent } from '@mui/material'
import { forwardRef, useId } from 'react'
import { normalizeOption } from '@/utils'
import type { InputProps } from '@/types'
import * as S from './SelectInput.styles'

export const SelectInput = forwardRef<HTMLDivElement, Omit<InputProps, 'type'>>(
  (
    {
      disabled,
      error,
      fullWidth = false,
      helperText,
      label,
      name,
      onChange,
      options = [],
      required,
      size = 'medium',
      sx,
      value = '',
    },
    ref,
  ) => {
    const selectId = useId()
    const normalizedOptions = options.map(normalizeOption)

    const handleChange = (event: SelectChangeEvent<unknown>) => {
      onChange?.(event as never)
    }

    return (
      <Box
        ref={ref}
        sx={[S.rootSx(fullWidth), ...(Array.isArray(sx) ? sx : [sx])]}>
        {label && (<Typography sx={S.labelSx}>{label}</Typography>)}
        <FormControl
          disabled={disabled}
          error={error}
          fullWidth
          required={required}
          size={size}
        >
          <Select
            id={selectId}
            name={name}
            value={value}
            displayEmpty
            onChange={handleChange}
          >
            {normalizedOptions.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>

          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      </Box>
    )
  },
)

SelectInput.displayName = 'SelectInput'
