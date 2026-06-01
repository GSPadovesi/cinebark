import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

const router: Record<string, {
  label: string,
  href: string
}> = {
  '/': { label: 'inicio', href: '/' },
  '/filmes': { label: 'filmes', href: '/filmes' },
  '/sessoes': { label: 'sessoes', href: '/sessoes' },
  '/salas': { label: 'salas', href: '/salas' },
  '/testes': { label: 'teste', href: '/teste' }
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, any>(({
  options
}, ref) => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <Box ref={ref} component="div" sx={{ p: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        {options?.map((item: any) => (
          <Link underline='hover' color='inherit' href={router[item]?.href ?? '/'}>
            {router[item]?.label}
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  )
});