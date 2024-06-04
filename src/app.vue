<template>
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <NuxtLayout>
    <NuxtPage :class="$style.page" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { loadProfile } = useProfile();

onMounted(loadProfile);
</script>

<style lang="scss" module>
.page {
  z-index: 0;
  position: relative;
}
</style>
