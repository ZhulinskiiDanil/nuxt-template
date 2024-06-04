import type { UIConfig } from './types';

export const uiConfig: UIConfig = {
  defaultTheme: 'dark',
  getTheme() {
    const { theme } = useTheme();

    return theme || { value: 'dark' };
  }
};
