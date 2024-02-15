<template>
  <div
    v-if="additionals && additionals.length > 0"
    :class="$style.additionals"
  >
    <div
      v-for="additional in additionals"
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
        @click="$emit('fn', additional.id)"
        :class="$style.item__fn"
      >
        {{ additional.fn }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { AuthWrapperAdditionalsProps } from './types'

  defineProps<AuthWrapperAdditionalsProps>()
</script>

<style lang="scss" src="./Additionals.module.scss" module></style>