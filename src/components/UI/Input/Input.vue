<template>
  <label
    :id="id"
    :class="[
      $style.label,
      $style.default,
      $style[inputTheme],
      (wrong || error) && $style.wrong,
      fill && $style.fill,
      type === 'password' && $style.password
    ]"
  >
    <div v-if="$slots['before-icon']" :class="$style.icon">
      <slot name="before-icon"></slot>
    </div>
    <div :class="$style.inputContainer">
      <div :class="[$style.error, error && $style.active]">
        {{ error }}
      </div>
      <input
        v-model="model"
        v-maska
        :name="name"
        :autocomplete="autocomplete"
        :type="
          type === 'password'
            ? isHidden
              ? type
              : 'text'
            : type || 'text'
        "
        :placeholder="placeholder || 'Placeholder'"
        :readonly="readonly"
        :data-maska="dataMask"
        :data-maska-tokens="dataMaskaTokens"
        :data-maska-eager="dataMaskaEager"
      />
    </div>
    <SVGEyeClosed
      v-if="isHidden && isPassword"
      :class="[$style.icon, $style.eye]"
      @click="toggleEye"
    />
    <SVGEye
      v-else-if="isPassword"
      :class="[$style.icon, $style.eye]"
      @click="toggleEye"
    />
    <div v-if="after" :class="$style.after">
      {{ after }}
    </div>
    <div v-if="$slots['after-icon']" :class="$style.icon">
      <slot name="after-icon"></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import type { InputHTMLAttributes } from 'nuxt/dist/app/compat/capi';
import type { UIKitElementTheme } from '../types';
import { uiConfig } from '../ui.config';

type Props = {
  id?: string;
  theme?: UIKitElementTheme;
  fill?: boolean;
  wrong?: boolean;
  copied?: boolean;
  error?: string;
  after?: string;

  dataMask?: string;
  dataMaskaTokens?: string;
  dataMaskaEager?: boolean;

  type?: InputHTMLAttributes['type'];
  name?: InputHTMLAttributes['name'];
  placeholder?: InputHTMLAttributes['placeholder'];
  autocomplete?: InputHTMLAttributes['autocomplete'];
  readonly?: InputHTMLAttributes['readonly'];
};

defineEmits<{
  buttonClick: [];
  copy: [text: string];
}>();
const model = defineModel<string>();
const props = defineProps<Props>();

const isPassword = computed(() => props?.type === 'password');
const isHidden = ref(true);
const inputTheme = computed(
  () => props.theme || uiConfig?.getTheme?.().value || 'light'
);

function toggleEye() {
  isHidden.value = !isHidden.value;
}
</script>

<style lang="scss" module src="./Input.module.scss"></style>
