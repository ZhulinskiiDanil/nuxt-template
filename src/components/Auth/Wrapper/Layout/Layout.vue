<template>
  <div :class="[$style.wrapper, $style[theme]]">
    <div :class="$style.cw">
      <div :class="$style.content">
        <div :class="$style.inner">
          <slot name="default"></slot>
        </div>
        <!-- TODO: Сделать плавную анимацию -->
        <div v-if="$slots.footer" :class="$style.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div
      v-if="footerText?.length"
      :class="$style.footerText"
      :style="{ maxWidth: (footerTextMaxWidth || 400) + 'px' }"
    >
      <NuxtLink
        v-for="elm of footerText"
        :to="elm.linkHref ? elm.linkHref : ''"
        :data-link="!!elm?.linkHref || !!elm?.fnId"
        @click="() => elm?.fnId && $emit('fn', elm.fnId)"
        :class="$style.text"
      >
        {{ elm.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ fn: [fnId: string] }>();
defineSlots<{ default: []; footer: [] }>();
defineProps<{
  footerText?: {
    text: string;
    linkHref?: string;
    fnId?: string | null;
  }[];
  footerTextMaxWidth?: number | null;
}>();

const { theme } = useTheme();
</script>

<style lang="scss" src="./Layout.module.scss" module></style>
