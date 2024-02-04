<template>
  <AuthWrapper title="Регистрация">
    <AuthSignUpForm />
  </AuthWrapper>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'auth' })
  useSeoMeta({ title: 'Регистрация' })
</script>
<style lang="scss" src="./index.module.scss" module></style>