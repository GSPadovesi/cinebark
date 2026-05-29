import type { SxProps, Theme } from '@mui/material/styles'

export function cardSx(backgroundImage?: string): SxProps<Theme> {
  return {
    minHeight: 500,
    position: 'relative',
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(145deg, #050505, #1f1405)',
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    '&::before': {
      position: 'absolute',
      inset: 0,
      content: '""',
      background: `
      linear-gradient(
        90deg,
        rgba(5,5,5,0.82) 0%,
        rgba(5,5,5,0.58) 20%,
        rgba(5,5,5,0.38) 40%,
        rgba(5,5,5,0.22) 50%,
        rgba(5,5,5,0.38) 60%,
        rgba(5,5,5,0.58) 80%,
        rgba(5,5,5,0.82) 100%
      )`
    },

    '@media (max-width: 768px)': {
      backgroundPosition: 'center',
    }
  }
}

export const contentSx: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  width: { xs: '100%', md: '44%' },
  height: 500,
  display: 'flex',
  flexDirection: 'column',
  p: { xs: 2.5, md: 5 },
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: 4,

  '&:last-child': {
    pb: { xs: 2.5, md: 5 },
  },
}

export const badgeSx: SxProps<Theme> = {
  width: 'fit-content',
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: 1.25,
  borderRadius: 1,
  border: '1px solid rgba(212, 160, 23, 0.48)',
  color: '#d4a017',
  fontSize: 11,
  fontWeight: 600,
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  textTransform: 'uppercase',
}

export const titleSx: SxProps<Theme> = {
  color: '#fff',
  fontSize: { xs: 32, md: 44 },
  fontWeight: 300,
  letterSpacing: 0,
  lineHeight: 1,
  textTransform: 'uppercase',
}

export const descriptionSx: SxProps<Theme> = {
  maxWidth: 420,
  color: 'rgba(255,255,255,0.72)',
  fontSize: 14,
  lineHeight: 1.7,
}

export const metaSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  flexWrap: 'wrap',
}

export const durationSx: SxProps<Theme> = {
  color: 'rgba(255,255,255,0.65)',
  fontSize: 13,
}

export const ratingChipSx: SxProps<Theme> = {
  width: 36,
  height: 36, 
  borderRadius: '10px',
  bgcolor: '#4b2ca3',
  color: '#fff',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontWeight: 600
}

export const genreChipSx: SxProps<Theme> = {
  bgcolor: 'rgba(255,255,255,0.08)',
  color: 'rgba(255,255,255,0.75)',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontWeight: 600,
}

export const actionsSx: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1.5,
  mt: 1,
}
