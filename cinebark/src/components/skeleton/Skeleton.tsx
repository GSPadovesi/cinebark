import type { SkeletonProps } from '@/types'
import MuiSkeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

export function Skeleton({
  count = 1,
  columns = 1,
  gap = 2,
  containerSx,
  ...props
}: SkeletonProps) {
  return (
    <Box
      sx={[
        {
          display: 'grid',
          gridTemplateColumns:
            typeof columns === 'number'
              ? `repeat(${columns}, minmax(0, 1fr))`
              : columns,
          gap,
        },
        ...(Array.isArray(containerSx) ? containerSx : [containerSx]),
      ]}
    >
      {Array.from({ length: count }, (_, index) => (
        <MuiSkeleton
          key={index}
          animation="wave"
          variant="rounded"
          {...props}
        />
      ))}
    </Box>
  )
}
