import type { SxProps, Theme } from '@mui/material/styles'

export const cardSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  background: '#070b12',
}

export function posterSx(imageUrl?: string): SxProps<Theme> {
  return {
    position: 'relative',
    height: 260,
    backgroundColor: 'rgba(255,255,255,0.04)',
    backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}

export const ratingChipSx: SxProps<Theme> = {
  position: 'absolute',
  top: 12,
  left: 12,
  bgcolor: '#5b3ab6',
  color: '#fff',
  width: 36,
  height: 36,
  borderRadius: '10px',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontWeight: 600
}

export const durationSx: SxProps<Theme> = {
  position: 'absolute',
  top: 12,
  right: 12,
  px: 1,
  py: 0.4,
  borderRadius: 999,
  bgcolor: 'rgba(0,0,0,0.65)',
  color: '#fff',
  fontSize: 12,
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontWeight: 600,
}

export const contentSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: 1,
  p: 2,

  '&:last-child': {
    pb: 2,
  },
}

export const titleSx: SxProps<Theme> = {
  color: '#fff',
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.15,
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
}

export const genreSx: SxProps<Theme> = {
  color: 'rgba(255,255,255,0.55)',
  fontSize: 13,
  fontWeight: 600,
}

export const descriptionSx: SxProps<Theme> = {
  color: 'rgba(255,255,255,0.48)',
  display: '-webkit-box',
  fontSize: 14,
  lineHeight: 1.45,
  minHeight: 38,
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  flex: 1
}

export const sessionsButtonSx: SxProps<Theme> = {
  alignSelf: 'stretch',
  mt: 1,
  height: 42,
  borderRadius: '10px',
}
