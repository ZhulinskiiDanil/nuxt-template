export function useGetLocaleError() {
  const { t } = useI18n();

  return (key: string, errorCode: string) =>
    t(`errors.${key}.${errorCode}`);
}
