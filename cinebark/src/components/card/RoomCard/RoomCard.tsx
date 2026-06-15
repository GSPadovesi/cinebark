import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import type { CardProps } from '@/types'
import { Box, Typography, Button, Chip } from '@mui/material'
import MuiCard from '@mui/material/Card'
import {
  Users,
  Monitor,
  Clapperboard,
  Armchair,
  Volume2,
  Snowflake,
  Accessibility,
  ChevronRight,
} from 'lucide-react'
import * as S from './RoomCard.styles'

export const RoomCard = forwardRef<HTMLDivElement, Omit<CardProps, 'type'>>(
  (
    {
      title,
      number,
      capacity,
      roomType,
      description,
      resources,
      posterUrl,
      active,
      ...props
    },
    ref
  ) => {
    const roomTypeMap: Record<string, string> = {
      PREMIUM: 'Premium',
      IMAX: 'IMAX',
      VIP: 'VIP',
      COMFORT: 'Comfort',
      STANDARD: 'Standard',
    }

    const resourceMap: Record<string, { label: string; icon: ReactNode }> = {
      RECLINING_SEATS: {
        label: 'Poltronas reclináveis',
        icon: <Armchair size={20} />,
      },
      DOLBY_ATMOS_AUDIO: {
        label: 'Som Dolby Atmos',
        icon: <Volume2 size={20} />,
      },
      AIR_CONDITIONING: {
        label: 'Ar-condicionado',
        icon: <Snowflake size={20} />,
      },
      ACCESSIBILITY: {
        label: 'Acessibilidade',
        icon: <Accessibility size={20} />,
      },
      VIDEO_4K: {
        label: 'Projeção 4K',
        icon: <Monitor size={20} />,
      },
      VIDEO_8K: {
        label: 'Projeção 8K',
        icon: <Monitor size={20} />,
      },
    }

    const formattedNumber = `${number && number < 10 ? '0' : ''}${number}`
    const resourceList = Array.isArray(resources) ? resources : resources ? [resources] : []
    const technologyLabel = ['STANDARD', 'COMFORT'].includes(String(roomType))
      ? '2D'
      : '2D • 3D'

    return (
      <MuiCard
        ref={ref}
        {...props}
        sx={[
          S.cardSx,
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        <Box sx={S.cardContentSx}>
          <Box sx={S.imageContainerSx}>
            {posterUrl && (
              <img
                src={posterUrl}
                alt={
                  typeof title === 'string'
                    ? title
                    : `Sala ${formattedNumber}`
                }
              />
            )}
          </Box>

          <Box sx={S.mainInfoSx}>
            <Box sx={S.titleContainerSx}>
              <Typography component="h2" sx={S.titleSx}>
                Sala {formattedNumber}
              </Typography>

              {roomType && (
                <Chip
                  label={roomTypeMap[String(roomType)] ?? roomType}
                  size="small"
                  sx={S.typeChipSx}
                />
              )}
            </Box>

            <Box sx={S.specsContainerSx}>
              <Box sx={S.specItemSx}>
                <Typography sx={S.specLabelSx}>
                  Capacidade
                </Typography>

                <Box sx={S.specValueSx}>
                  <Users size={20} />
                  <span>{capacity} lugares</span>
                </Box>
              </Box>

              <Box sx={S.specDividerSx} />

              <Box sx={S.specItemSx}>
                <Typography sx={S.specLabelSx}>
                  Tipo de tela
                </Typography>

                <Box sx={S.specValueSx}>
                  <Monitor size={20} />
                  <span>Gigante</span>
                </Box>
              </Box>

              <Box sx={S.specDividerSx} />

              <Box sx={S.specItemSx}>
                <Typography sx={S.specLabelSx}>
                  Tecnologia
                </Typography>

                <Box sx={S.specValueSx}>
                  <Clapperboard size={20} />
                  <span>{technologyLabel}</span>
                </Box>
              </Box>
            </Box>

            <Typography sx={S.descriptionSx}>
              {description}
            </Typography>

            <Button
              endIcon={<ChevronRight size={18} />}
              sx={S.detailsButtonSx}
            >
              Ver mais detalhes
            </Button>
          </Box>

          <Box sx={S.resourcesContainerSx}>
            <Typography sx={S.resourcesTitleSx}>
              Recursos
            </Typography>

            <Box sx={S.resourcesListSx}>
              {resourceList.map((resource) => {
                const item = resourceMap[String(resource)]

                if (!item) return null

                return (
                  <Box
                    key={String(resource)}
                    sx={S.resourceItemSx}
                  >
                    {item.icon}
                    <Typography>
                      {item.label}
                    </Typography>
                  </Box>
                )
              })}
            </Box>

            <Button
              variant="outlined"
              sx={S.sessionsButtonSx}
            >
              Ver sessões
            </Button>
          </Box>
        </Box>
      </MuiCard>
    )
  }
)

RoomCard.displayName = 'RoomCard'
