<template>
  <div
    ref="parentRef"
    @click="toggle"
    :class="[
      $style.default,
      $style.langDtopdown,
      isActive && $style.active,
      isLeft && $style.isLeft,
      $style[`dropTo__${dropTo}`]
    ]"
  >
    <div :class="$style.selected">
      <img
        :alt="$i18n.locale"
        :src="localeImages[$i18n.locale]"
        :class="$style.locale"
      />
      <SVGExpand :class="$style.arrow" />
    </div>
    <div :class="$style.list">
      <NuxtLink
        v-for="locale in ($i18n as any)
          .locales as LocaleObject[]"
        :to="localePath($route.fullPath, locale.code)"
      >
        <div :class="$style.option" :key="locale.code">
          <img
            :alt="locale.code"
            :src="localeImages[locale.code]"
            :class="$style.locale"
          />
          {{ locale.name }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils';
import type { LocaleObject } from '@nuxtjs/i18n';

withDefaults(
  defineProps<{
    dropTo?: 'down' | 'top';
  }>(),
  {
    dropTo: 'top'
  }
);

const glob = import.meta.glob('~/assets/svg/locales/*.svg', {
  eager: true
}) as Record<string, { default: string }>;
const localeImages = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [
    filename(key).toLocaleLowerCase(),
    value?.default
  ])
);

const localePath = useLocalePath();
const parentRef = ref<HTMLDivElement | null>(null);
const isActive = ref(false);
const isLeft = ref(false);
const interval = ref<NodeJS.Timeout>();

function hide() {
  setTimeout(() => {
    isActive.value = false;
  }, 100);
}

function toggle() {
  isActive.value = !isActive.value;

  if (isActive.value) {
    document.addEventListener('mousedown', hide, { once: true });
    document.addEventListener('touchstart', hide, {
      once: true
    });
  }
}

function handlePosition() {
  if (!isLeft.value && parentRef.value) {
    const rect = parentRef.value.getBoundingClientRect();

    if (rect.left < 100) {
      isLeft.value = true;
    }
  } else if (parentRef.value) {
    const rect = parentRef.value.getBoundingClientRect();

    if (rect.left > 100) {
      isLeft.value = false;
    }
  }
}

onMounted(() => {
  interval.value = setInterval(handlePosition, 100);
});

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});
</script>

<style
  lang="scss"
  src="./DropdownLanguage.module.scss"
  module
></style>
