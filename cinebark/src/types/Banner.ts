import type { SxProps, Theme } from "@mui/material"

export type BannerProps = {
  backgroundImage: string,
  title: string,
  subtitle: string,
  content: string,
  children?: React.ReactNode
  sx?: SxProps<Theme>
}