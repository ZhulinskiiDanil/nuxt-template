<template>
  <div :class="$style.profile">
    <img
      :class="$style.avatar"
      :src="avatarURL || defaultAvatar"
      alt="Avatar"
    />
    <div :class="$style.username">
      {{ username || 'Загрузка' }}
    </div>
    <SVGSignOut
      @click.prevent="$emit('signOut')"
      :class="$style.icon"
    />
  </div>
</template>

<script setup lang="ts">
  defineEmits<{ signOut: [] }>()
  defineProps<{
    avatarURL?: string
    username?: string
  }>()

  const defaultAvatar = useDefaultAvatar()
</script>

<style lang="scss" src="./ProfileCard.module.scss" module></style>