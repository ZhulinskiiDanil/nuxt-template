<template>
  <label
    :id="id"
    :class="[
      $style.label,
      $style.default,
      $style[inputTheme],
      wrong && $style.wrong,
      fill && $style.fill,
      type === 'password' && $style.password
    ]"
  >
    <input
      :name="name"
      :autocomplete="autocomplete"
      :type="type === 'password'
        ? (isHidden ? type : 'text')
        : type || 'text'"
      :placeholder="placeholder || 'Placeholder'"

      v-maska
      v-model="model"
      :data-maska="dataMask"
      :data-maska-tokens="dataMaskaTokens"
      :data-maska-eager="dataMaskaEager"
    />
    <SVGClosedEye
      v-if="isHidden && isPassword"
      @click="toggleEye"
      :class="$style.icon"
    />
    <SVGEye
      v-else-if="isPassword"
      @click="toggleEye"
      :class="$style.icon"
    />
  </label>
</template>

<script setup lang="ts">
  import type { InputHTMLAttributes } from 'nuxt/dist/app/compat/capi';
  import type { UIKitElementTheme } from '../types';
  import { uiConfig } from '../ui.config';

  type Props = {
    id?: string
    theme?: UIKitElementTheme
    fill?: boolean
    wrong?: boolean
    copied?: boolean
    
    dataMask?: string
    dataMaskaTokens?: string
    dataMaskaEager?: boolean

    type?: InputHTMLAttributes['type']
    name?: InputHTMLAttributes['name']
    placeholder?: InputHTMLAttributes['placeholder']
    autocomplete?: InputHTMLAttributes['autocomplete']
  }

  const model = defineModel()
  const emit = defineEmits<{ buttonClick: []; copy: [text: string] }>()
  const props = defineProps<Props>()
  
  const isPassword = computed(() => props?.type === 'password')
  const isHidden = ref(true)
  const inputTheme = computed(() => (
    props.theme
    || uiConfig?.getTheme?.().value
    || 'light'
  ))

  function toggleEye() {
    isHidden.value = !isHidden.value
  }
</script>

<style lang="scss" module src="./Input.module.scss"></style>
