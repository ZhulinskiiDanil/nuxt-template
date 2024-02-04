<template>
  <div
    :class="[
      $style.wrapper,
      $style[theme],
      backgroundShown === false && $style.transparent
    ]"
  >
    <div :class="$style.cw">
      <div :class="$style.content">
        <div :class="$style.cw">
          <div v-if="title || buttonBack" :class="$style.title">
            <UIButton
              @click="$router.back()"
              v-if="buttonBack"
              type="gray"
              mini
            >
              <template #icon>
                <SVGFullArrowLeft />
              </template>
            </UIButton>
            <h1>
              {{ title }}
            </h1>
          </div>
          <h3 v-if="description" :class="$style.description">
            {{ description }}
          </h3>
          <div :class="$style.form">
            <div :class="$style.inner">
              <slot></slot>
              <div v-if="additionals && additionals.length > 0" :class="$style.additional">
                <div
                  v-for="additional in additionals"
                  :class="$style.item"
                >
                  <span :class="$style.item__title">
                    {{ additional.title }}
                  </span>
                  <NuxtLink
                    v-if="additional.path && additional.link"
                    :class="$style.item__link"
                    :to="localePath(additional.path)"
                  >
                    {{ additional.link }}
                  </NuxtLink>
                  <span
                    v-if="additional.id && additional.fn"
                    @click="$emit('fn', additional.id)"
                    :class="$style.item__fn"
                  >
                    {{ additional.fn }}
                  </span>
                </div>
              </div>
            </div>
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
              type="black"
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
            type="black"
            uppercase
            fill
          >
            {{ additionalButton }}
          </UIButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits<{
    cancel: []
    submit: []
    additionalButtonClick: []
    fn: [fnId: string | number]
  }>()
  const props = withDefaults(defineProps<{
    title?: string
    description?: string
    error?: string | null
    buttonBack?: boolean
    backgroundShown?: boolean
    additionalButton?: string
    linkedAdditionalButton?: { href: string, name: string }
    additionals?: {
      id?: string | number,
      title: string,
      link?: string,
      path?: string,
      fn?: string
    }[]
  }>(), {
    backgroundShown: true,
    buttonBack: false
  })

  const { theme } = useTheme()
  const localePath = useLocalePath()
</script>

<style lang="scss" src="./Wrapper.module.scss" module></style>