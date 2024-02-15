<template>
  <div
    v-if="title"
    :class="[$style.title, titleCentered && $style.centered]"
  >
    <h1>{{ title }}</h1>
    <AuthWrapperStepsBadge :class="$style.steps" :steps="steps" />
  </div>
</template>

<script setup lang="ts">
  import type { AuthWrapperTitleProps } from './types'

  defineProps<AuthWrapperTitleProps>()
</script>

<style lang="scss" src="./Title.module.scss" module></style>