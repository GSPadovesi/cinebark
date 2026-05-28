import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#d4a017', // dourado principal
      contrastText: '#ffffff',
    },

    secondary: {
      main: '#7c3aed', // roxo premium
    },

    background: {
      default: '#050816', // fundo principal
      paper: '#0f172a', // cards/surfaces
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

    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'radial-gradient(circle at top, #0f172a 0%, #050816 45%, #020617 100%)',
          minHeight: '100vh',
        },
      },
    },

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
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 18,
          paddingBlock: 10,
        },
      },
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
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

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(255,255,255,0.03)',
          },
        },
      },
    },
  },
})
