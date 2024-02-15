<template>
  <label :class="[
    $style.avatar,
    canEdit && !disabled && $style.canEdit
  ]">
    <img :src="src || defaultAvatar" alt="Avatar" />
    <SVGPen v-if="canEdit && !disabled" :class="$style.pen" />
    <input
      v-if="canEdit && !disabled"
      type="file"
      @change="$emit('change', $event)"
      accept=".png, .jpg, .jpeg"
      hidden
    />
  </label>
</template>

<script setup lang="ts">
  defineEmits<{ change: [e: Event] }>()
  defineProps<{
    src?: string
    canEdit?: boolean
    disabled?: boolean
  }>()

  const defaultAvatar = useDefaultAvatar()
</script>

<style lang="scss" src="./Avatar.module.scss" module></style>