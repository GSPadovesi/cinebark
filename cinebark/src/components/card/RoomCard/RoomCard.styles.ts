import type { SxProps, Theme } from '@mui/material'

export const cardSx: SxProps<Theme> = {
  width: '100%',
  minHeight: '236px',
  background:
    'linear-gradient(135deg, rgba(7,11,18,0.98), rgba(5,8,13,0.98))',
  border: '1px solid rgba(148, 163, 184, 0.12)',
  borderRadius: '12px',
  padding: '16px',
  boxShadow: '0 0 0 1px rgba(255,255,255,0.02), 0 18px 40px rgba(0,0,0,0.35)',
}

export const cardContentSx: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '340px 1fr 425px',
  gap: '28px',
  alignItems: 'stretch',

  '@media(max-width: 1100px)': {
    gridTemplateColumns: '1fr',
  },
}

export const imageContainerSx: SxProps<Theme> = {
  height: '216px',
  overflow: 'hidden',
  borderRadius: '8px',
  backgroundColor: 'rgba(255,255,255,0.04)',

  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}

export const mainInfoSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  py: '6px',
}

export const titleContainerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
}

export const titleSx: SxProps<Theme> = {
  color: '#f8fafc',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: 1,
}

export const typeChipSx: SxProps<Theme> = {
  height: '26px',
  px: '8px',
  color: '#d4a017',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'uppercase',
  backgroundColor: 'rgba(212, 160, 23, 0.08)',
  border: '1px solid rgba(212, 160, 23, 0.65)',
  borderRadius: '6px',
}

export const specsContainerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  my: '2px',
}

export const specItemSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

export const specLabelSx: SxProps<Theme> = {
  color: '#8b93a3',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: '12px',
  fontWeight: 600,
}

export const specValueSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#c7cbd3',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: '13px',
  fontWeight: 500,

  '& svg': {
    fontSize: '22px',
    color: '#a8adb8',
  },
}

export const specDividerSx: SxProps<Theme> = {
  width: '1px',
  height: '50px',
  backgroundColor: 'rgba(148, 163, 184, 0.16)',
}

export const descriptionSx: SxProps<Theme> = {
  maxWidth: '600px',
  color: '#a8adb8',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: '13px',
  lineHeight: 1.5,
  mt: '2px',
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
}

export const detailsButtonSx: SxProps<Theme> = {
  width: 'fit-content',
  p: 0,
  mt: '2px',
  color: '#d4a017',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: '13px',
  fontWeight: 700,
  textTransform: 'none',

  '&:hover': {
    backgroundColor: 'transparent',
    color: '#f0b923',
  },
}

export const resourcesContainerSx: SxProps<Theme> = {
  borderLeft: '1px solid rgba(148, 163, 184, 0.14)',
  pl: '28px',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  columnGap: '24px',

  '@media(max-width: 1100px)': {
    borderLeft: 'none',
    borderTop: '1px solid rgba(148, 163, 184, 0.14)',
    pl: 0,
    pt: '18px',
    gridTemplateColumns: '1fr',
    rowGap: '20px',
  },
}

export const resourcesTitleSx: SxProps<Theme> = {
  gridColumn: '1 / -1',
  color: '#8b93a3',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: '13px',
  fontWeight: 700,
  mb: '-10px',
}

export const resourcesListSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}

export const resourceItemSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#c7cbd3',

  '& svg': {
    fontSize: '22px',
    color: '#a8adb8',
  },

  '& p': {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '13px',
    fontWeight: 500,
  },
}

export const sessionsButtonSx: SxProps<Theme> = {
  width: '165px',
  height: '54px',
  color: '#d4a017',
  borderColor: 'rgba(212, 160, 23, 0.8)',
  borderRadius: '8px',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: '13px',
  fontWeight: 700,
  textTransform: 'none',

  '&:hover': {
    borderColor: '#d4a017',
    backgroundColor: 'rgba(212, 160, 23, 0.08)',
  },
}
