<template>
  <button
    :class="[
      $style.button,
      fill && $style.fill,
      active && $style.active
    ]"
  >
    <div v-if="$slots.icon" :class="$style.icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  fill?: boolean;
  active?: boolean;
}>();
</script>

<style
  lang="scss"
  src="./SidebarButton.module.scss"
  module
></style>
