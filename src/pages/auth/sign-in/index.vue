<template>
  <AuthWrapper title="Вход в аккаунт">
    <AuthSignInForm />
  </AuthWrapper>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'auth' })
  useSeoMeta({ title: 'Вход в аккаунт' })
</script>
<style lang="scss" src="./index.module.scss" module></style>