<template>
  <button
    :class="$style.notifications"
    :disabled="disabled"
  >
    <div :class="$style.iconWrapper">
      <SVGBell :class="$style.icon" />
      <div v-if="hasUnread" :class="$style.ellipse"></div>
    </div>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    disabled?: boolean
    hasUnread?: boolean
  }>()
</script>

<style lang="scss" src="./NotificationsButton.module.scss" module></style>
