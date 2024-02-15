const intlUnits: Record<Intl.RelativeTimeFormatUnit, number> = {
  second: 1,    seconds: 2,
  minute: 3,    minutes: 4,
  hour: 5,      hours: 6,
  day: 7,       days: 8,
  week: 9,      weeks: 10,
  month: 11,    months: 12,
  quarter: 13,  quarters: 14,
  year: 15,     years: 16
}

export function getRelativeDate(
  at: string,
  untilUnit?: Intl.RelativeTimeFormatUnit | null | undefined,
  intlParameters?: {
    locale?: string | string[],
    options?: Intl.RelativeTimeFormatOptions
  },
) {
  const rtf1 = new Intl
    .RelativeTimeFormat(intlParameters?.locale || 'en', {
      numeric: "auto",
      ...(intlParameters?.options || {})
    });
  
  const dateAt = new Date(at)
  const localeDate = dateAt.toLocaleDateString()
  const localeTime = dateAt.toLocaleTimeString(undefined, { timeStyle: 'short' })
  const exactTime = `${localeDate} ${localeTime}`
  const currDate = new Date()
  const diffMs = +currDate - +dateAt

  const untilUnitPriority = untilUnit ? intlUnits[untilUnit] : intlUnits.years

  const time = {
    seconds() { return diffMs / 1000 },
    minutes() { return this.seconds() / 60 },
    hours() { return this.minutes() / 60 },
    days() { return this.hours() / 24 },
    weeks() { return this.days() / 7 },
    months() { return this.days() / 30 },
    years() { return this.days() / 365 }
  };
  
  for (const elm of [
    "years", "months", "weeks", "days",
    "hours", "minutes", "seconds"
  ] as const) {
    if (time[elm]() >= 1) {
      if (elm === 'seconds') {
        return rtf1.format(-Math.floor(time[elm]()), elm)
      }

      return untilUnitPriority >= intlUnits[elm]
        ? rtf1.format(-Math.floor(time[elm]()), elm)
        : exactTime
    }
  }

  return exactTime
}