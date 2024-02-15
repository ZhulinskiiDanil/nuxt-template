export const authMiddleware = defineNuxtRouteMiddleware(async () => {
  const profile = await $api.profile.getProfile()
  
  if (!profile?.id) {
    return await navigateTo('/auth/sign-in')
  }
})