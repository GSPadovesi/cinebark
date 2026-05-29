import type { InputOption } from '@/types'

export function normalizeOption(option: InputOption | string): InputOption {
  return typeof option === 'string' ? { label: option, value: option } : option
}
