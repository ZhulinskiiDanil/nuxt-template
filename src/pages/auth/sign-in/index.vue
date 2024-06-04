<template>
  <AuthWrapper
    :tabs="[
      { name: 'Вход', href: '/auth/sign-in' },
      { name: 'Регистрация', href: '/auth/sign-up' }
    ]"
  >
    <AuthSignInForm />
  </AuthWrapper>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({ layout: 'auth' });
useSeoMeta({ title: t('auth.signIn.seo.title') });
</script>
<style lang="scss" src="./index.module.scss" module></style>
