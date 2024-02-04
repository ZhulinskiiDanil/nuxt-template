<template>
  <Teleport to="body">
    <div :class="[
      $style.modal,
      visible && $style.active,
      opticate && $style.opticate,
      $style[theme]
    ]">
      <div @click.prevent="$emit('hide')" :class="$style.overlay"></div>
      <div :class="$style.content">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import type { UIKitElementTheme } from '../types';
  import { uiConfig } from '../ui.config';

  const emit = defineEmits(["hide"])
  const props = defineProps<{
    visible?: boolean
    opticate?: boolean
    theme?: UIKitElementTheme
  }>()
  const theme = ref(
    props.theme || uiConfig.getTheme?.() || 'light'
  )
</script>

<style lang="scss" src="./Modal.module.scss" module></style>
