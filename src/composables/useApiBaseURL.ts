export function useApiBaseURL(): string {
  return useRuntimeConfig()?.public?.BASE_URL || '';
}
