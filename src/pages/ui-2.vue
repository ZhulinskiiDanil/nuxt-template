<template>
  <div :class="$style.container">
    <!-- ! ============== LANG DROPDOWN EXAMPLE ============== -->
    <div :class="$style.row">
      <UIDropdownLanguage />
    </div>

    <!-- ! ============== TAB EXAMPLE ============== -->
    <div :class="$style.row">
      <UITab fill>
        <UITabButton fill active>1</UITabButton>
        <UITabButton fill>2</UITabButton>
      </UITab>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useVuelidate } from '@vuelidate/core';
// import {
//   helpers,
//   minLength,
//   maxLength,
//   required,
//   sameAs
// } from '@vuelidate/validators';

// const data = reactive({
//   login: '',
//   password: '',
//   checkbox: false,
//   switcher: false,
//   modal: false,
//   existingModal: false,
//   testMask: ''
// });

// const rules = computed(() => ({
//   login: {
//     minLength: helpers.withMessage(
//       'Минимальная длина логина 3 символа',
//       minLength(3)
//     ),
//     maxLength: helpers.withMessage(
//       'Максимальная длина логина 32 символа',
//       maxLength(32)
//     ),
//     required: helpers.withMessage('Обязательное поле', required)
//   },
//   password: {
//     minLength: helpers.withMessage(
//       'Минимальная длина пароля 8 символов',
//       minLength(8)
//     ),
//     maxLength: helpers.withMessage(
//       'Максимальная длина пароля 64 символа',
//       maxLength(64)
//     ),
//     required: helpers.withMessage('Обязательное поле', required)
//   },
//   checkbox: {
//     sameAs: helpers.withMessage(
//       'Согласитесь с правилами использования',
//       sameAs(true)
//     )
//   },
//   switcher: {
//     sameAs: helpers.withMessage(
//       'Включите этот переключатель',
//       sameAs(true)
//     )
//   },
//   testMask: {
//     required: helpers.withMessage(
//       'Номер телефона обязателен',
//       required
//     )
//   }
// }));
// const v$ = useVuelidate(rules, {
//   login: toRef(data.login),
//   password: toRef(data.password),
//   checkbox: toRef(data.checkbox),
//   switcher: toRef(data.switcher),
//   testMask: toRef(data.testMask)
// });

definePageMeta({ layout: 'empty' });
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0 auto;
  padding: 5rem;
  max-width: 600px;
  box-sizing: content-box;

  .row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #222;
    background: #1e1e1e;

    .textarea {
      resize: vertical;
      min-height: 100px;
      max-height: 200px;
    }

    .description {
      color: #bbb;

      b {
        color: #fff;
      }
    }
  }
}
</style>
