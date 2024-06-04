<template>
  <div :class="[$style.tab, fill && $style.fill]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fill?: boolean;
}>();
</script>

<style lang="scss" src="./Tab.module.scss" module></style>
