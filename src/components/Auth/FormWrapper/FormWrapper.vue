<template>
  <form
    id="form"
    :class="[$style.form, $style[theme]]"
    @submit.prevent="submit"
  >
    <div v-if="description" :class="$style.description">
      {{ description }}
    </div>
    <div v-if="!isEmpty" :class="$style.inputs">
      <slot name="default"></slot>
      <NuxtLink data-link :to="submitLink || ''">
        <UIButton
          v-if="stepButtonTitle"
          fill
          :disabled="disabled"
          style="white-space: nowrap"
          type="black"
        >
          {{ stepButtonTitle }}
        </UIButton>
      </NuxtLink>
    </div>
    <div
      v-if="cancelTitle || submitTitle"
      :class="$style.buttons"
    >
      <UIButton
        v-if="cancelTitle"
        fill
        type="stroked"
        @click.stop.prevent="cancel"
      >
        {{ cancelTitle }}
      </UIButton>
      <NuxtLink data-link :to="submitLink || ''">
        <UIButton
          v-if="submitTitle"
          fill
          :disabled="disabled"
          style="white-space: nowrap"
          type="black"
        >
          {{ submitTitle }}
        </UIButton>
      </NuxtLink>
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{ submit: []; cancel: [] }>();
withDefaults(
  defineProps<{
    cancelTitle?: string;
    submitTitle?: string;
    submitLink?: string;
    stepButtonTitle?: string;
    isEmpty?: boolean;
    description?: string;
    disabled?: boolean;
  }>(),
  {
    cancelTitle: '',
    submitTitle: '',
    submitLink: '',
    stepButtonTitle: '',
    description: '',
    disabled: false,
    isEmpty: false
  }
);

const { theme } = useTheme();

function cancel() {
  emit('cancel');
}

function submit() {
  emit('submit');
}
</script>

<style
  lang="scss"
  src="./FormWrapper.module.scss"
  module
></style>
