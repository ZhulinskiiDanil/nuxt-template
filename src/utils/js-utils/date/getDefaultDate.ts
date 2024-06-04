export function getStaticDate(at: string | null): string {
  const dateAt = at ? new Date(at) : new Date();
  const localeDate = dateAt.toLocaleDateString();
  const localeTime = dateAt.toLocaleTimeString(undefined, {
    timeStyle: 'short'
  });
  const exactTime = `${localeDate} ${localeTime}`;

  return exactTime;
}
