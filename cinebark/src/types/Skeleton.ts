import type { SkeletonProps as SkeletonMuiProps } from '@mui/material/Skeleton'
import type { SxProps, Theme } from '@mui/material/styles'

export type SkeletonProps = SkeletonMuiProps & {
  count?: number
  containerSx?: SxProps<Theme>
  columns?: number | string
  gap?: number | string
}
