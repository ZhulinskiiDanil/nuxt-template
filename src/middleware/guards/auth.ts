import { Api } from '@/api'

export const authMiddleware = defineNuxtRouteMiddleware(async (to, from) => {
  const profile = await Api.profile.getProfile()
  
  if (!profile) {
    return await navigateTo('/auth/sign-in')
  }
})