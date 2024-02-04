<template>
  <div :class="$style.container">
    Profile
  </div>
</template>

<script setup lang="ts">
  import { Guard } from '@/middleware/guard'

  const { t } = useI18n()
  // const { profile } = useProfile()

  definePageMeta({
    layout: 'profile',
    middleware: [Guard('auth')]
  })

  useSeoMeta({
    title: t('profile.seo.title')
  })
</script>

<style lang="scss" src="./main.module.scss" module></style>