import '@mui/material/Typography'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    cardTitle: true
    cardDescription: true
    featuredCardTitle: true
    featuredCardDescription: true
    featuredCardMeta: true
    featuredCardBadge: true
  }
}