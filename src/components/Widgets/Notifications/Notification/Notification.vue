<template>
  <div :class="[$style.container, error && $style.error]">
    <div :class="$style.title">
      <div :class="$style.icon">
        <slot name="icon"></slot>
      </div>
      <span>
        {{
          title || (error && $t('main.error')) || 'Уведомление'
        }}
      </span>
    </div>
    <div :class="$style.content">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  icon(props: any): any;
}>();
defineProps<{
  title?: string;
  content: string;
  error?: boolean;
}>();
</script>

<style
  lang="scss"
  src="./Notification.module.scss"
  module
></style>
