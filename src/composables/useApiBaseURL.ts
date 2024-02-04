export function useApiBaseURL(): string {
  const { app } = useRuntimeConfig()

  return app.BASE_URL
}