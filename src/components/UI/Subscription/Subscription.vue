<template>
  <div
    :class="[
      $style.subscription,
      active && $style.active,
      hot && $style.hot,
      big && $style.big
    ]"
  >
    <div v-if="hot" :class="$style.tag">
      <img
        :class="$style.icon"
        src="./assets/fire.png"
        alt="Icon"
      />
      Самый популярный
    </div>
    <div :class="$style.title">
      {{ title }}
    </div>
    <div :class="$style.price">
      {{ humanReadableCurrency(price) }}
    </div>
    <div :class="$style.oldPrice">
      {{ oldPrice }}
    </div>
    <UIButton
      fill
      :class="$style.button"
      :variant="active ? 'primary' : 'tertiary'"
    >
      Оформить за {{ humanReadableCurrency(price) }}
    </UIButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  price: number;
  oldPrice?: number;
  active?: boolean;
  hot?: boolean;
  big?: boolean;
}>();

function humanReadableCurrency(n: number) {
  return (n || 0).toLocaleString('ru', {
    style: 'currency',
    currency: 'rub',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}
</script>

<style
  lang="scss"
  src="./Subscription.module.scss"
  module
></style>
