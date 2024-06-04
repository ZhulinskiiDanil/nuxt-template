import type { User } from '@/ts';

export async function getProfile() {
  const request = useRequest();
  const response = await request<User>('/users/@me');

  return response?.id ? response : null;
}
