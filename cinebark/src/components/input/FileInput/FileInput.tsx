import { Box, FormHelperText, Typography } from '@mui/material'
import { forwardRef } from 'react'
import type { FileInputProps } from '@/types'

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ error, fullWidth = false, helperText, label, sx, ...props }, ref) => {
    return (
      <Box sx={[{ width: fullWidth ? '100%' : 260 }, ...(Array.isArray(sx) ? sx : [sx])]}>
        {label && (
          <Typography sx={{ mb: 0.8, color: 'rgba(255,255,255,0.58)', fontSize: 13, fontWeight: 600 }}>
            {label}
          </Typography>
        )}

        <input {...props} ref={ref} type="file" {...props} />

        {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
      </Box>
    )
  },
)

FileInput.displayName = 'FileInput'
