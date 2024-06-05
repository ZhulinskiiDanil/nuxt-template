<template>
  <div
    :class="[
      $style.select,
      $style.default,
      isActive && options?.length && $style.active
    ]"
    @click="toggle"
  >
    <div :class="$style.selected">
      <span>
        {{ activeOption?.text || 'Prop "options" not filled' }}
      </span>
      <SVGExpand :class="$style.arrow" />
    </div>
    <div :class="$style.list">
      <div
        v-for="option in options"
        :key="option.value"
        :class="[
          $style.option,
          activeOption.value === option.value && $style.active
        ]"
        @click.stop="setOption(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type SelectOption = {
  value: string;
  text: string;
};

const emit = defineEmits<{
  change: [option: SelectOption];
}>();
const props = defineProps<{
  options: SelectOption[];
}>();

const isActive = ref(false);
const options = ref(props?.options || []);
const activeOption = ref(options.value[0]);

watch(props, () => {
  options.value = props.options || [];
});

function hide() {
  setTimeout(() => {
    isActive.value = false;
  }, 100);
}

function toggle() {
  isActive.value = !isActive.value;

  if (isActive.value) {
    document.addEventListener('mousedown', hide, { once: true });
    document.addEventListener('touchstart', hide, {
      once: true
    });
  }
}

function setOption(option: SelectOption) {
  activeOption.value = option;
  emit('change', option);
}
</script>

<style lang="scss" src="./Select.module.scss" module></style>
