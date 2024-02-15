<template>
  <div v-if="backButton" :class="$style.head">
    <button
      v-if="backButton"
      :class="$style.backButton"
      @click="$emit('backButtonClick')"
    >
      <SVGExpand :class="$style.icon" />
      Назад
    </button>
    <AuthWrapperStepsBadge :class="$style.steps" :steps="steps" />
  </div>
</template>

<script setup lang="ts">
  import type { AuthWrapperHeadProps } from './types'

  defineEmits<{ backButtonClick: [] }>()
  defineProps<AuthWrapperHeadProps>()
</script>

<style lang="scss" src="./Head.module.scss" module></style>