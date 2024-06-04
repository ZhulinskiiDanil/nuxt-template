export type UseTimeStampPeriod =
  | 'millisecond'
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'month'
  | 'quarter'
  | 'year';
export type UseTimeStampAmount = number;

const peroids: Record<UseTimeStampPeriod, number> = {
  millisecond: 1,
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  month: 1000 * 60 * 60 * 24 * 30,
  quarter: 1000 * 60 * 60 * 24 * 30 * 3,
  year: 1000 * 60 * 60 * 24 * 30 * 12
};

export function useTimestamp(
  period: UseTimeStampPeriod,
  amount: UseTimeStampAmount = 1
) {
  return peroids[period] * amount;
}
