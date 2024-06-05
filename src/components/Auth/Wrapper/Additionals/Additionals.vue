<template>
  <div
    v-if="additionals && additionals.length > 0"
    :class="$style.additionals"
  >
    <div
      v-for="additional in additionals"
      :key="additional.title"
      :class="$style.item"
    >
      <span :class="$style.item__title">
        {{ additional.title }}
      </span>
      <NuxtLink
        v-if="additional.path && additional.link"
        :class="$style.item__link"
        :to="localePath(additional.path)"
      >
        {{ additional.link }}
      </NuxtLink>
      <span
        v-if="additional.id && additional.fn"
        :class="$style.item__fn"
        @click="additional.id && $emit('fn', additional.id)"
      >
        {{ additional.fn }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AuthWrapperAdditionalsProps } from './types';

defineProps<AuthWrapperAdditionalsProps>();
defineEmits<{ fn: [id: string | number] }>();

const localePath = useLocalePath();
</script>

<style
  lang="scss"
  src="./Additionals.module.scss"
  module
></style>
