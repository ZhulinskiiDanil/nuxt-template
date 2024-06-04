<template>
  <AuthWrapper title="Восстановление пароля">
    <AuthPasswordRecoveryForm />
  </AuthWrapper>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({ layout: 'auth' });
useSeoMeta({ title: t('auth.recoveryPassword.seo.title') });
</script>
<style lang="scss" src="./index.module.scss" module></style>
