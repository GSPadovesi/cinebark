import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#d4a017',
      contrastText: '#ffffff',
    },

    secondary: {
      main: '#7c3aed',
    },

    background: {
      default: '#050816',
      paper: '#0f172a',
    },

    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },

    success: {
      main: '#22c55e',
    },

    error: {
      main: '#ef4444',
    },

    divider: 'rgba(255,255,255,0.08)',
  },

  shape: {
    borderRadius: 14,
  },

  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },

    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },

    h3: {
      fontWeight: 700,
    },

    body1: {
      color: '#94a3b8',
      fontSize: 16,
      lineHeight: 1.7,
    },

    body2: {
      color: '#94a3b8',
      fontSize: 14,
      lineHeight: 1.6,
    },

    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: 16,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.32)',
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 800,
        },

        sizeSmall: {
          height: 24,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          height: 46,
          borderRadius: 14,
          paddingInline: 18,
          paddingBlock: 10,
        },
      },

      variants: [
        {
          props: { color: 'secondary', variant: 'contained' },

          style: {
            background:
              'linear-gradient(135deg, #d4a017 0%, #fbbf24 100%)',
            color: '#111827',

            '&:hover': {
              background:
                'linear-gradient(135deg, #c9920f 0%, #f59e0b 100%)',
            },
          },
        },

        {
          props: { color: 'primary', variant: 'outlined' },

          style: {
            borderColor: 'rgba(212,160,23,0.5)',

            '&:hover': {
              borderColor: '#d4a017',
              background: 'rgba(212,160,23,0.08)',
            },
          },
        },
      ],
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(5, 8, 22, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 52,
          borderRadius: 14,
          color: '#fff',
          background:
            'linear-gradient(180deg, rgba(11,15,25,0.96), rgba(5,8,15,0.98))',
          transition: 'all 0.2s ease',

          '& fieldset': {
            borderColor: 'rgba(255,255,255,0.08)',
          },

          '&:hover fieldset': {
            borderColor: 'rgba(212,160,23,0.32)',
          },

          '&.Mui-focused fieldset': {
            borderColor: '#d4a017',
          },
        },

        input: {
          paddingInline: 14,
          fontSize: 14,
          fontWeight: 600,

          '&::placeholder': {
            color: 'rgba(255,255,255,0.35)',
            opacity: 1,
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          display: 'flex',
          alignItems: 'center',
          height: 52,
          padding: '0 42px 0 14px !important',
          fontSize: 14,
          fontWeight: 700,
        },

        icon: {
          color: 'rgba(255,255,255,0.72)',
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          marginTop: 8,
          minWidth: 220,
          borderRadius: 12,
          background: '#070b12',
          border: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          color: '#fff',

          '&:hover': {
            background: 'rgba(212,160,23,0.12)',
          },

          '&.Mui-selected': {
            background: 'rgba(212,160,23,0.18)',
          },

          '&.Mui-selected:hover': {
            background: 'rgba(212,160,23,0.22)',
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-paragraph': {
            marginBottom: 16,
            color: '#94a3b8',
            lineHeight: 1.7,
          },
        },
      },
    },
  },
})
