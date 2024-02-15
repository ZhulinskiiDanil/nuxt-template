<template>
  <button :class="[
    $style.button,
    fill && $style.fill,
    active && $style.active
  ]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    fill?: boolean
    active?: boolean
  }>()
</script>

<style lang="scss" src="./TabButton.module.scss" module></style>