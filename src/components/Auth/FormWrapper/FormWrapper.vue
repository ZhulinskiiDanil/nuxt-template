<template>
  <form
    id="form"
    @submit.prevent="submit"
    :class="[$style.form, $style[theme]]"
  >
    <div v-if="description" :class="$style.description">
      {{ description }}
    </div>
    <div v-if="!isEmpty" :class="$style.inputs">
      <slot name="default"></slot>
      <NuxtLink data-link :to="submitLink || ''">
        <UIButton
          fill
          v-if="stepButtonTitle"
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
        fill
        v-if="cancelTitle"
        @click.stop.prevent="cancel"
        type="stroked"
      >
        {{ cancelTitle }}
      </UIButton>
      <NuxtLink data-link :to="submitLink || ''">
        <UIButton
          fill
          v-if="submitTitle"
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
const props = withDefaults(
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
    isEmpty: false
  }
);

const legal = ref(false);

function changeLegal(checked: boolean) {
  legal.value = checked;
}

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
