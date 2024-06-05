<template>
  <label :class="[$style.switcher, $style[theme]]">
    <input v-model="model" type="checkbox" hidden />
    <div :class="$style.circle">
      <slot name="icon"></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import type { UIKitElementTheme } from '../types';
import { uiConfig } from '../ui.config';

defineEmits<{ change: [] }>();
defineSlots<{ icon(): void }>();
const model = defineModel<boolean>();
const props = defineProps<{
  theme?: UIKitElementTheme;
  disabled?: boolean;
  checked?: boolean;
}>();

const theme = ref(
  props.theme || uiConfig.getTheme?.().value || 'light'
);
</script>

<style lang="scss" src="./Switcher.module.scss" module></style>
