import type { SxProps, Theme } from '@mui/material/styles'

export function rootSx(fullWidth: boolean): SxProps<Theme> {
  return {
    width: fullWidth ? '100%' : 200,
  }
}

export const labelSx: SxProps<Theme> = {
  mb: 0.8,
  color: 'rgba(255,255,255,0.58)',
  fontSize: 13,
  fontWeight: 600,
}
