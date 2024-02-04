<template>
  <div :class="[$style.input, $style[theme]]">
    <p :class="$style.title">
      <span data-main>
        {{ title }}
      </span>
      <span v-if="additional" data-additional>
        {{ additional }}
      </span>
    </p>
    <slot></slot>
    <div v-if="error" :class="$style.error">
      {{ error }}
    </div>
    <div v-if="description" :class="$style.description">
      {{ description }}
    </div>
    <NuxtLink :class="$style.link" v-if="link" :to="localePath(link.href)">
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const { theme, setTheme } = useTheme()
  const localePath = useLocalePath()
  const props = defineProps<{
    title?: string
    additional?: string
    error?: string | null
    description?: string | null
    link?: {
      href: string
      name: string
    }
  }>()
</script>

<style lang="scss" src="./InputWrapper.module.scss" module></style>