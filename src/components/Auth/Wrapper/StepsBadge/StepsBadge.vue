<template>
  <div
    v-if="steps && steps.current < steps.max"
    :class="$style.steps"
  >
    {{ steps.current }}/{{ steps.max }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{ steps?: { current: number, max: number } }>()
</script>

<style lang="scss" src="./StepsBadge.module.scss" module></style>