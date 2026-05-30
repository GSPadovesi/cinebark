import type { SxProps, Theme } from '@mui/material/styles'

export function bannerSx(): SxProps<Theme> {
  return {
    width: '100%',
    height: '300px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    borderRadius: '14px',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: `
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.92) 36%,
        rgba(0, 0, 0, 0.36) 50%,
        rgba(0, 0, 0, 0) 60%
      )`,
    },

    '@media (max-width: 768px)': {
      '&::before': {
        background: `
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.65) 60%,
            rgba(0, 0, 0, 0.25) 100%
          )`,
      },
    }
  }
}

export const contentSx: SxProps<Theme> = {
  position: 'relative',
  zIndex: 2,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '10px',
  color: '#fff',
  p: { xs: 2.5, md: 5 },
  flex: '1 1 auto',
}

export const HeaderSx: SxProps<Theme> = {
    display: 'flex',
    gap: 1,
    p: 0
}

export const titleSx: SxProps<Theme> = {
    color: '#fff',
    fontWeight: 400,
    fontFamily: "Inter",
}

export const subtitleSx: SxProps<Theme> = {
    color: '#d4a017',
    fontWeight: 600,
    fontFamily: "Inter",
}

export const contentTextSx: SxProps<Theme> = {
  flex: 1,
  fontFamily: "Inter",
  // whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: 'ellipsis',
  maxWidth: '360px',
}
