export type Theme = 'light' | 'dark';

export function useTheme() {
  const key = 'theme';
  const theme = useState<Theme>(key, () => 'dark');

  return {
    theme,
    setTheme(theme: Theme) {
      useState<Theme>(key).value = theme;
    },
    setDark() {
      useState<Theme>(key).value = 'dark';
    },
    setLight() {
      useState<Theme>(key).value = 'light';
    },
    toggle() {
      const newTheme = theme.value === 'dark' ? 'light' : 'dark';

      useState<Theme>(key).value = newTheme;
    }
  };
}
