<template>
  <Teleport to="body">
    <div
      :class="[
        $style.modal,
        visible && $style.active,
        opticate && $style.opticate
      ]"
    >
      <div
        :class="$style.overlay"
        @click.prevent="$emit('hide')"
      ></div>
      <div :class="$style.contentWrapper">
        <div :class="[$style.content, contentClassName]">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineEmits<{ hide: [] }>();
defineProps<{
  visible?: boolean;
  opticate?: boolean;
  contentClassName?: string;
}>();
</script>

<style lang="scss" src="./Modal.module.scss" module></style>
