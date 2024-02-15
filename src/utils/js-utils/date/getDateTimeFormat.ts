export function getDateTimeFormat(
  locale: string,
  at?: string | null,
  options?: Intl.DateTimeFormatOptions
) {
  if (!at) return ''
  const date = new Date(at)
  const opts = options || {}
  
  return new Intl.DateTimeFormat(locale || 'ru', {
    dateStyle: 'long',
    timeStyle: 'short',
    
    ...opts
  }).format(date)
}