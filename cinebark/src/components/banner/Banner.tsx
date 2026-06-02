import { forwardRef } from 'react';
import type { BannerProps } from '@/types';
import { CardContent, Typography } from '@mui/material';
import MuiCard from '@mui/material/Box';
import * as S from './Banner.styles';

export const Banner = forwardRef<HTMLDivElement, BannerProps>((
  {
    backgroundImage,
    title = '',
    subtitle = '',
    content = '',
    children,
    sx,
    ...props
  }, ref) => {
  return (
    <MuiCard {...props} ref={ref} sx={[S.bannerSx(), ...(Array.isArray(sx) ? sx : [sx])]}>
      <CardContent sx={S.contentSx}>
        <CardContent sx={S.HeaderSx}>
          {title && (
            <Typography component="h1" variant="h2" sx={S.titleSx}>{title}</Typography>
          )}
          {subtitle && (
            <Typography component="h2" variant="h2" sx={S.subtitleSx}>{subtitle}</Typography>
          )}
        </CardContent>
        {content && (
          <Typography variant="body1" sx={S.contentTextSx}>{content}</Typography>
        )}
        {children}
      </CardContent>
      {backgroundImage && (
        <img
          style={{ position: 'absolute', height: '100%', width: '100%', objectFit: 'cover', inset: 0, zIndex: 0 }}
          src={backgroundImage}
          alt="imagem movieBanner"
        />
      )}
    </MuiCard>
  )
});

Banner.displayName = 'Banner';
