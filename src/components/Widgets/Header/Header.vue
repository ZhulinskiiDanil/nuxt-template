<template>
  <header :class="$style.header">
    <div :class="$style.cw">Header</div>
  </header>
</template>

<script setup lang="ts">
const { theme } = useTheme();
const { profile, isLoading: isProfileLoading } = useProfile();

async function signOut() {
  // const response = await $api.auth.signOut()
  // if (response) {
  //   await navigateTo(localePath('/'), { external: true })
  // }
}
</script>

<style lang="scss" src="./Header.module.scss" module></style>
