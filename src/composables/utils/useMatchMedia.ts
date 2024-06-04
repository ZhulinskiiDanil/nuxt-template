import { useMatchMedia as targetFunc } from 'vue-composable';

export const useMatchMedia = (
  ...args: Parameters<typeof targetFunc>
) => {
  return toRef(targetFunc(...args));
};
