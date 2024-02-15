<template>
  <AuthWrapperLayout
    :class="$style.layout"
    :footerText="footerText"
    :footerTextMaxWidth="footerTextMaxWidth"
    @fn="(...args) => $emit('fn', ...args)"
  >
    <AuthWrapperHead
      :class="$style.head"
      @backButtonClick="$emit('backButtonClick')"
      :backButton="backButton"
      :steps="steps"
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
      :titleCentered="titleCentered"
      :steps="steps"
    />
    <h3
      v-if="description"
      :class="[$style.description, descriptionCentered && $style.centered]"
    >
      {{ description }}
    </h3>
    <UITab v-if="tabs" :class="$style.tab" fill>
      <NuxtLink
        v-for="tab of tabs"
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
        @click="$emit('additionalButtonClick')"
        :class="$style.additionalButton"
        uppercase
        fill
      >
        {{ linkedAdditionalButton.name }}
      </UIButton>
    </NuxtLink>
    <UIButton
      v-if="additionalButton"
      @click="$emit('additionalButtonClick')"
      :class="$style.additionalButton"
      uppercase
      fill
    >
      {{ additionalButton }}
    </UIButton>
    <UICheckbox
      v-if="checkboxText"
      :title="checkboxText"
      :class="$style.checkbox"
      :disabled="!!checkboxDisabled"
      v-model="checkbox"
    />
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </AuthWrapperLayout>
</template>

<script setup lang="ts">
  import type { AuthWrapperHeadProps } from './Head/types'
  import type { AuthWrapperAdditionalsProps } from './Additionals/types'
  import type { AuthWrapperTitleProps } from './Title/types'

  type Props = {
    error?: string | null
    description?: string
    descriptionCentered?: boolean
    checkboxText?: string
    checkboxDisabled?: boolean
    additionalButton?: string
    linkedAdditionalButton?: { href: string, name: string }
    logoVisible?: boolean
    footerText?: {
      text: string
      linkHref?: string
      fnId?: string | null
    }[]
    footerTextMaxWidth?: number | null
    tabs?: {
      name: string
      href: string
    }[]
  } & AuthWrapperHeadProps
    & AuthWrapperTitleProps
    & AuthWrapperAdditionalsProps

  const slots = defineSlots<{ footer: [], default: [] }>()
  const checkbox = defineModel('checkbox')
  const emit = defineEmits<{
    cancel: []
    submit: []
    backButtonClick: []
    additionalButtonClick: []
    fn: [fnId: string | number]
  }>()
  defineProps<Props>()

  const localePath = useLocalePath()
</script>

<style lang="scss" src="./Wrapper.module.scss" module></style>