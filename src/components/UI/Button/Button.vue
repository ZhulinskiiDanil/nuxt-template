<template>
  <button
    :class="[
      $style.button,
      $style[buttonTheme],
      $style[buttonType],
      fill && $style.fill,
      hovered && $style.hovered,
      focused && $style.focused,
      pressed && $style.pressed,
      uppercase && $style.uppercase,
      mini && $style.mini
    ]"
    :disabled="disabled"
    :data-has-icon="!!$slots.icon"
  >
    <div v-if="$slots.icon" :class="$style.icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { uiConfig } from '../ui.config';
  import type { UIKitElementTheme } from '../types';
  import type { ButtonVariant } from './types'

  const slots = defineSlots()
  const props = defineProps<{
    theme?: UIKitElementTheme
    variant?: ButtonVariant
    uppercase?: boolean
    disabled?: boolean
    hovered?: boolean
    focused?: boolean
    pressed?: boolean
    fill?: boolean
    mini?: boolean
  }>()
  
  const buttonType = computed(() => props.variant || 'primary')
  const buttonTheme = computed(() => (
    props.theme
    || uiConfig?.getTheme?.().value
    || 'light'
  ))
</script>

<style lang="scss" module src="./Button.module.scss"></style>
