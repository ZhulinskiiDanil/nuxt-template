<template>
  <AuthWrapperLayout
    :class="$style.layout"
    :footer-text="footerText"
    :footer-text-max-width="footerTextMaxWidth"
    @fn="(...args) => $emit('fn', ...args)"
  >
    <AuthWrapperHead
      :class="$style.head"
      :back-button="backButton"
      :steps="steps"
      @back-button-click="$emit('backButtonClick')"
    />
    <img
      v-if="logoVisible"
      :class="$style.logo"
      src="/logo.svg"
      alt="Logo"
    />
    <AuthWrapperTitle
      :class="$style.title"
      :title="title"
      :title-centered="titleCentered"
      :steps="steps"
    />
    <h3
      v-if="description"
      :class="[
        $style.description,
        descriptionCentered && $style.centered
      ]"
    >
      {{ description }}
    </h3>
    <UITab v-if="tabs" :class="$style.tab" fill>
      <NuxtLink
        v-for="tab of tabs"
        :key="tab.name"
        style="width: 100%; min-width: min-content"
        :to="localePath(tab.href)"
      >
        <UITabButton
          fill
          :active="$route.path === localePath(tab.href)"
        >
          {{ tab.name }}
        </UITabButton>
      </NuxtLink>
    </UITab>
    <div :class="$style.form">
      <slot name="default"></slot>
      <AuthWrapperAdditionals
        :class="$style.additionals"
        :additionals="additionals"
      />
      <div v-if="error" :class="$style.error">
        {{ error }}
      </div>
    </div>
    <NuxtLink
      v-if="linkedAdditionalButton"
      :to="linkedAdditionalButton.href"
    >
      <UIButton
        :class="$style.additionalButton"
        uppercase
        fill
        @click="$emit('additionalButtonClick')"
      >
        {{ linkedAdditionalButton.name }}
      </UIButton>
    </NuxtLink>
    <UIButton
      v-if="additionalButton"
      :class="$style.additionalButton"
      uppercase
      fill
      @click="$emit('additionalButtonClick')"
    >
      {{ additionalButton }}
    </UIButton>
    <UICheckbox
      v-if="checkboxText"
      v-model="checkbox"
      :title="checkboxText"
      :class="$style.checkbox"
      :disabled="!!checkboxDisabled"
    />
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </AuthWrapperLayout>
</template>

<script setup lang="ts">
import type { AuthWrapperHeadProps } from './Head/types';
import type { AuthWrapperAdditionalsProps } from './Additionals/types';
import type { AuthWrapperTitleProps } from './Title/types';

type Props = {
  error?: string | null;
  description?: string;
  descriptionCentered?: boolean;
  checkboxText?: string;
  checkboxDisabled?: boolean;
  additionalButton?: string;
  linkedAdditionalButton?: { href: string; name: string };
  logoVisible?: boolean;
  footerText?: {
    text: string;
    linkHref?: string;
    fnId?: string | null;
  }[];
  footerTextMaxWidth?: number | null;
  tabs?: {
    name: string;
    href: string;
  }[];
} & AuthWrapperHeadProps &
  AuthWrapperTitleProps &
  AuthWrapperAdditionalsProps;

defineSlots<{ footer(): void; default(): void }>();
defineEmits<{
  cancel: [];
  submit: [];
  backButtonClick: [];
  additionalButtonClick: [];
  fn: [fnId: string | number];
}>();
defineProps<Props>();
const checkbox = defineModel<boolean>('checkbox');

const localePath = useLocalePath();
</script>

<style lang="scss" src="./Wrapper.module.scss" module></style>
