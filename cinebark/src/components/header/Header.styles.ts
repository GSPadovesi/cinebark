import type { SxProps, Theme } from '@mui/material/styles'

export const headerSx = (isScrolled: boolean): SxProps<Theme> => ({
  width: '100%',
  height: '80px',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
  background: isScrolled ? '#0b0f12' : 'transparent',
  boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'background 0.3s ease, box-shadow 0.3s ease',
})

export const headerWrapperSx: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 20px 20px 0',

  '& img': {
    width: '260px',
    height: 'max-content',
    maxWidth: 'none',
    display: 'block',
    objectFit: 'contain',
  },

  '@media (max-width: 600px)': {
    '& img': {
      width: '300px',
    },
  },
}

export const headerListSx = (isOpen: boolean): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  listStyle: 'none',

  '@media(max-width: 1024px)': {
    position: 'fixed',
    inset: '0',
    height: '100dvh',
    width: '100dvw',
    zIndex: 20,
    background: '#000',
    flexDirection: 'column',
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    gap: '40px',

    '.buttonClose': {
      position: 'absolute',
      top: '20px',
      right: '20px',
      cursor: 'pointer',

      ":hover": {
        color: '#d4a017'
      }
    }
  }
})

export const headerListItemSx = (isPage: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  position: 'relative',
  cursor: 'pointer',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(to right, transparent, #d4a017, transparent)',
    transform: `scaleX(${isPage ? 1 : 0})`,
    transition: 'transform 0.3s ease-in-out',
  },

  '@media(max-width: 1024px)': {
    width: '100%',

    '& svg': {
      width: '20px',
      height: '20px'
    },

    '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    // top: '50%',
    height: '1px',
    // width: '20%',
    background: 'linear-gradient(to right, transparent, #d4a017, transparent)',
    transform: 'translate(-50%)',
    transition: 'transform 0.3s ease-in-out',
  },
  }
})

export const headerListItemContentSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  position: 'relative',
}

export const headerListItemLinkSx: SxProps<Theme> = {
  position: 'absolute',
  inset: 0,
  zIndex: 1,
}
