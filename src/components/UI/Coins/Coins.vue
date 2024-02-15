<template>
  <div :class="$style.coins">
    <span :class="$style.amount">
      {{ amount || 0 }}
    </span>
    <SVGMelonityCoin :class="$style.icon" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{ amount?: number }>()
</script>

<style lang="scss" src="./Coins.module.scss" module></style>