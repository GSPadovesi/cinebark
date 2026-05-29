import { forwardRef } from 'react'
import MuiButton from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import type { ButtonProps } from '@/types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = 'primary',
      disabled,
      isLoading = false,
      size = 'large',
      variant = 'contained',
      ...props
    },
    ref,
  ) => {
    return (
      <MuiButton
        ref={ref}
        color={color}
        disabled={disabled || isLoading}
        size={size}
        variant={variant}
        startIcon={
          isLoading ? (
            <CircularProgress color="inherit" size={18} thickness={5} />
          ) : (
            props.startIcon
          )
        }
        {...props}
      >
        {children}
      </MuiButton>
    )
  },
)

Button.displayName = 'Button'
