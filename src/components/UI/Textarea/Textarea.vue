<template>
  <textarea
    v-model="model"
    :class="[
      $style.textarea,
      $style[textareaTheme],
      $style.default,
      wrong && $style.wrong
    ]"
  ></textarea>
</template>

<script setup lang="ts">
import type { UIKitElementTheme } from '../types';
import { uiConfig } from '../ui.config';

defineEmits<{
  buttonClick: [];
  copy: [text: string];
}>();
const model = defineModel<string>();
const props = defineProps<{
  theme?: UIKitElementTheme;
  wrong?: boolean;
}>();

const textareaTheme = computed(
  () => props.theme || uiConfig?.getTheme?.().value || 'light'
);
</script>

<style lang="scss" module src="./Textarea.module.scss"></style>
