<template>
  <button :class="[
    $style.burger,
    active && $style.active
  ]">
    <SVGBurger v-if="!active" :class="$style.icon" />
    <SVGClose v-else :class="$style.icon" />
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    active?: boolean
  }>()
</script>

<style lang="scss" src="./BurgerButton.module.scss" module></style>