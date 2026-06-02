import type { SxProps, Theme } from '@mui/material/styles'

export const SXResourceBanner: SxProps<Theme> = {
  width: '100%',
  overflow: 'hidden'
}

export const SXResourceBannerContent: SxProps<Theme> = {
  width: '100%',
  minHeight: '100px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '10px',
  backgroundColor: '#090c10',
  padding: '20px',

  '@media(max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}

export const SXGrid: SxProps<Theme> = {
  width: '100%', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center',
  gap: '20px'
}
  
export const SXGridItem: SxProps<Theme> = {
  width: '100%', 
  display: 'flex', 
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  padding: 2,
  gap: '20px',

  '&:not(:last-child)': {
    '@media (min-width: 960px)': {
      borderRight: '1px solid #131518',
    },
  },
}

export const SXIconContent: SxProps<Theme> = {
  width: '100px',
  height: '100px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to bottom right, #1b1a17 20%, #101114 60%)',
  borderRadius: '8px',

  '& img': {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  },
}

export const SXContent: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
}

export const titleSx: SxProps<Theme> = {
    color: '#b4b5b4',
    fontWeight: 400,
    fontFamily: "Inter",
}

export const subtitleSx: SxProps<Theme> = {
    color: '#74757a',
    fontWeight: 400,
    fontFamily: "Inter",
    lineHeight: 1.2,
}
