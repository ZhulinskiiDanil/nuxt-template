<template>
  <label :class="[
    $style.switcher,
    $style[theme],
    palindrome && $style.palindrome
  ]">
    <input
      v-model="model"
      type="checkbox"
      hidden
    />
    <div :class="$style.circle">
      <slot name="icon"></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
  import type { UIKitElementTheme } from '../types';
  import { uiConfig } from '../ui.config';

  const model = defineModel()
  const emit = defineEmits(['change'])
  const slots = defineSlots<{ icon(props: any): any }>()
  const props = defineProps<{
    theme?: UIKitElementTheme
    disabled?: boolean
    checked?: boolean
    palindrome?: boolean
  }>()

  const theme = ref(
    props.theme || uiConfig.getTheme?.() || 'light'
  )

  function test(e: Event) {
    const target = e.target as HTMLInputElement | null

    emit('change', !!target?.checked)
  }
</script>

<style lang="scss" src="./Switcher.module.scss" module></style>
