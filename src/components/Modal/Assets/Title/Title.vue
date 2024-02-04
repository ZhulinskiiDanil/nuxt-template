<template>
  <div :class="[
    $style.title,
    center && $style.center
  ]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    center?: boolean
  }>()
</script>

<style lang="scss" src="./Title.module.scss" module></style>