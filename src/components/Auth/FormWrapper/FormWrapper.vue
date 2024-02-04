<template>
  <form
    id="form"
    @submit.prevent="submit"
    :class="[$style.form, $style[theme]]"
  >
    <div v-if="description" :class="$style.description">
      {{ description }}
    </div>
    <div :class="$style.inputs">
      <slot></slot>
    </div>
    <div
      v-if="cancelTitle || submitTitle"
      :class="$style.buttons"
    >
      <UIButton
        fill
        uppercase
        v-if="cancelTitle"
        @click.stop.prevent="cancel"
        type="stroked"
      >
        {{ cancelTitle }}
      </UIButton>
      <UIButton
        fill
        uppercase
        v-if="submitTitle"
        :disabled="!!(legalTitle && !legal) || submitDisabled"
        style="white-space: nowrap"
        type="black"
      >
        {{ submitTitle }}
      </UIButton>
    </div>
  </form>
</template>

<script setup lang="ts">
  const emit = defineEmits<{ submit: [], cancel: [] }>()
  const props = defineProps<{
    cancelTitle?: string
    submitTitle?: string
    submitDisabled?: boolean
    description?: string
    legalTitle?: string
  }>()

  const legal = ref(false)
  function changeLegal(checked: boolean) {
    legal.value = checked
  }

  const { theme } = useTheme()

  function cancel() {
    emit('cancel')
  }

  function submit() {
    if (props?.legalTitle && !legal.value) return
    
    emit('submit')
  }
</script>

<style lang="scss" src="./FormWrapper.module.scss" module></style>