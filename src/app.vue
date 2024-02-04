<template>
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <NuxtLayout>
    <div :class="`container ${theme}`">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { theme } = useTheme()
  useProfile({ prefetch: true })
</script>

<style lang="scss" scope>
  @import url('/styles/globals.scss');

  .container {
    z-index: 0;
    position: relative;
  }
</style>