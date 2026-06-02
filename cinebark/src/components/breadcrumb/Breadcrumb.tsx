import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

const router: Record<string, string> = {
  '': 'Início',
  'filmes': 'Filmes',
  'filmes/teste': 'Teste',
  'sessoes': 'Sessões',
  'salas': 'Salas',
  'teste': 'Teste',
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, any>(({
  links
}, ref) => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  console.log(links.split('/'));
  return (
    <Box ref={ref} component="div">
      <Breadcrumbs aria-label="breadcrumb">
        {links.split('/')?.map((item: any) => (
          <Link underline='hover' color='inherit' href={router[item]} sx={{ cursor: 'pointer', textTransform: 'capitalize' }} key={item}>
            {router[item]}
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  )
});