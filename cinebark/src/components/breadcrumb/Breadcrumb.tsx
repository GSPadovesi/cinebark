import * as React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

const routes: Record<string, string> = {
  '': 'Início',
  filmes: 'Filmes',
  sessoes: 'Sessões',
  salas: 'Salas',
}

type BreadcrumbProps = {
  links: string
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ links }, ref) => {
    const paths = links.split('/').filter(Boolean)

    return (
      <Box ref={ref} component="div">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ cursor: 'pointer' }}
          >
            {routes['']}
          </Link>

          {paths.map((_, index) => {
            const currentPath = paths.slice(0, index + 1).join('/')
            const href = `/${currentPath}`
            const label = routes[currentPath] ?? paths[index]
            const isLast = index === paths.length - 1

            if (isLast) {
              return (
                <Typography
                  key={currentPath}
                  color="text.primary"
                  sx={{ textTransform: 'capitalize' }}
                >
                  {label}
                </Typography>
              )
            }

            return (
              <Link
                key={currentPath}
                underline="hover"
                color="inherit"
                href={href}
                sx={{
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {label}
              </Link>
            )
          })}
        </Breadcrumbs>
      </Box>
    )
  },
)

Breadcrumb.displayName = 'Breadcrumb'