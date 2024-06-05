<template>
  <label
    :class="[
      $style.checkbox,
      $style[checkboxType],
      $style[checkboxTheme]
    ]"
  >
    <div :class="$style.input">
      <input
        v-model="model"
        type="checkbox"
        :disabled="disabled"
      />
      <SVGStar :class="$style.icon" />
    </div>
    <span v-if="title" :class="$style.text">
      {{ title }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { uiConfig } from '../ui.config';
import type { UIKitElementTheme } from '../types';
import type { CheckboxType } from './types';

const model = defineModel<boolean>();
const props = defineProps<{
  type?: CheckboxType;
  theme?: UIKitElementTheme;
  disabled?: boolean;
  title?: string;
}>();

const checkboxType = computed(() => props.type || 'black');
const checkboxTheme = computed(
  () => props.theme || uiConfig?.getTheme?.().value || 'light'
);
</script>

<style lang="scss" module src="./Checkbox.module.scss"></style>
