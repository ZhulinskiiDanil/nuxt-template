<template>
  <div :class="[$style.tag, $style[classNames[variant]]]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { StatusTagVariant } from '@/ts/ui/status-tag';

defineProps<{ variant: StatusTagVariant }>();

const classNames = computed(() => ({
  [StatusTagVariant.ACTIVE]: 'active',
  [StatusTagVariant.FROZEN]: 'frozen',
  [StatusTagVariant.INACTIVE]: 'inactive',
  [StatusTagVariant.DISABLED]: 'disabled'
}));
</script>

<style lang="scss" src="./StatusTag.module.scss" module></style>
