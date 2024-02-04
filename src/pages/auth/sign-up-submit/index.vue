<template>
  <AuthWrapper
    title="Завершение регистрации"
    description="Отлично, остаются несколько мелочей и мы можем начать!"
    :background-shown="false"
  >
    <AuthSignUpSubmitForm />
  </AuthWrapper>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'auth' })
  useSeoMeta({
    title: 'Завершение регистрации',
    robots: 'noindex, nofollow'
  })
</script>

<style lang="scss" src="./index.module.scss" module></style>