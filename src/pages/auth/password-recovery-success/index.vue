<template>
  <AuthWrapper
    title="Готово!"
    description="Мы выслали вам на почту новый пароль. Вы можете его поменять в личном кабинете"
    title-centered
    description-centered
  >
    <AuthFormWrapper
      submit-title="Авторизоваться"
      :submit-link="localePath('/auth/sign-in')"
    />
  </AuthWrapper>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

definePageMeta({ layout: 'auth' });
useSeoMeta({
  title: t('auth.passwordRecoverySuccess.seo.title')
});
</script>
<style lang="scss" src="./index.module.scss" module></style>
