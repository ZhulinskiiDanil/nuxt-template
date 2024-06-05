<template>
  <div :class="[$style.faq, big && $style.big]">
    <p v-if="title" :class="$style.title">
      {{ title }}
    </p>
    <div :class="$style.list">
      <div
        v-for="item of list"
        :key="item.id"
        tabindex="0"
        :class="$style.item"
        @mousedown="blurElelement"
        @touchstart="blurElelement"
      >
        <div :class="$style.head">
          <span>{{ item.title }}</span>
          <SVGExpand :class="$style.arrow" />
        </div>
        <div :class="$style.text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  big?: boolean;
  title: string;
  list: {
    id: number | string;
    title: string;
    text: string;
  }[];
}>();

function blurElelement(e: Event) {
  const target = e.currentTarget as HTMLElement;

  if (target && target === document.activeElement) {
    e.preventDefault();

    setTimeout(() => {
      if (target) {
        target.blur();
      }
    }, 0);
  }
}
</script>

<style lang="scss" src="./FAQ.module.scss" module></style>
