type AppEnv = {
  apiBaseUrl: string
  appName: string
}

export const env: AppEnv = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3333',
  appName: import.meta.env.VITE_APP_NAME ?? 'CineBark',
}
