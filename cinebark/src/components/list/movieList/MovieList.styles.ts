import type { SxProps, Theme } from '@mui/material/styles'

export const SXMovieList: SxProps<Theme> ={
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}

export const SXMovieListFilters: SxProps<Theme> = {
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

export const SXContainerList: SxProps<Theme> = {
  width: '100%',
  overflow: 'hidden'
}

export const SXLoadingGrid: SxProps<Theme> = {
  padding: '4px'
}

export const SXError: SxProps<Theme> = {
  width: '100%',
  minHeight: '180px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '24px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  backgroundColor: '#090c10',
  color: 'rgba(255, 255, 255, 0.72)',
  textAlign: 'center'
}

export const SXContainerOptions: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px'
}

export const SXPagination: SxProps<Theme> = {
  '& .MuiPagination-ul': {
    gap: '4px'
  }
}
