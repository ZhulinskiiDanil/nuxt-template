<template>
  <div :class="$style.container">



    <!-- ! ============== BUTTONS EXAMPLE ============== -->
    <!-- White is default type of button -->
    <div :class="$style.row">
      <UIButton variant="primary">
        {{ $t('helloWorld') }}
        <template #icon>
          <SVGActiveBell />
        </template>
      </UIButton>
      <UIButton variant="safe">
        {{ $t('helloWorld') }}
        <template #icon>
          <SVGActiveBell />
        </template>
      </UIButton>
      <UIButton variant="secondary">
        {{ $t('helloWorld') }}
        <template #icon>
          <SVGActiveBell />
        </template>
      </UIButton>
      <UIButton variant="tertiary">
        {{ $t('helloWorld') }}
        <template #icon>
          <SVGActiveBell />
        </template>
      </UIButton>
      <UIButton variant="custom">
        {{ $t('helloWorld') }}
        <template #icon>
          <SVGActiveBell />
        </template>
      </UIButton>
    </div>



    <!-- ! ============== SELECT EXAMPLE ============== -->
    <div :class="$style.row">
      <UISelect
        :options="[
          { text: '123', value: '123' },
          { text: '1234', value: '1234' },
          { text: '12345', value: '12345' }
        ]"
      />
    </div>



    <!-- ! ============== INPUTS EXAMPLE ============== -->
    <div :class="$style.row">
      <span>
        <i><b>Has error:</b> {{ v$.$error }}</i>
      </span>
      <UIInput
        placeholder="Введите логин"
        name="new-password"
        autocomplete="new-password"
        :wrong="v$.login.$error"
        :error="v$.login.$errors[0]?.$message || ''"
        v-model="v$.login.$model"
        after="after text"
      >
        <template #before-icon>
          <SVGActiveBell />
        </template>
        <template #after-icon>
          <SVGActiveBell />
        </template>
      </UIInput>
      <div v-for="error of v$.login.$errors" :key="error.$uid">
        {{ error.$message }}
      </div>
      <UIInput
        type="password"
        placeholder="Введите пароль"
        name="new-password"
        autocomplete="new-password"
        :wrong="v$.password.$error"
        v-model="v$.password.$model"
      />
      <div v-for="error of v$.password.$errors" :key="error.$uid">
        {{ error.$message }}
      </div>
    </div>



    <!-- ! ============== TEXTAREA EXAMPLE ============== -->
    <div :class="$style.row">
      <UIInputWrapper
        title="Описание"
        :error="v$.login.$errors[0]?.$message.toString() || null"
      >
        <UITextarea
          :class="$style.textarea"
          placeholder="Введите логин"
          name="new-password"
          autocomplete="new-password"
          :wrong="v$.login.$error"
          v-model="v$.login.$model"
        />
      </UIInputWrapper>
      <UIInputWrapper
        title="Описание 2"
        :error="v$.login.$errors[0]?.$message.toString() || null"
      >
        <UITextarea
          :class="$style.textarea"
          type="password"
          placeholder="Введите пароль"
          name="new-password"
          autocomplete="new-password"
          :wrong="v$.password.$error"
          v-model="v$.password.$model"
        />
      </UIInputWrapper>
    </div>



    <!-- ! ============== WRAPPED INPUTS EXAMPLE ============== -->
    <div :class="$style.row">
      <UIInputWrapper
        title="Логин"
        :error="v$.login.$errors[0]?.$message.toString() || null"
      >
        <UIInput
          placeholder="Введите логин"
          name="new-password"
          autocomplete="new-password"
          :wrong="v$.login.$error"
          v-model="v$.login.$model"
        />
      </UIInputWrapper>
      <UIInputWrapper
        title="Пароль"
        :error="v$.password.$errors[0]?.$message.toString() || null"
      >
        <UIInput
          type="password"
          placeholder="Введите пароль"
          name="new-password"
          autocomplete="new-password"
          :wrong="v$.password.$error"
          v-model="v$.password.$model"
        />
      </UIInputWrapper>
      <p :class="$style.description">
        <i>
          Оберните <b>UIInput</b> в <b>UIInputWrapper</b> чтобы дополнить его ошибками, заголовками итп
        </i>
      </p>
    </div>



    <!-- ! ============== CHECKBOX EXAMPLE ============== -->
    <div :class="$style.row">
      <span>
        <i><b>Checkbox:</b> {{ v$.checkbox.$model }}</i>
      </span>
      <UICheckbox
        title="Я соглашаюсь с правилами использования"
        v-model="v$.checkbox.$model"
      />
      <div v-for="error of v$.checkbox.$errors" :key="error.$uid">
        {{ error.$message }}
      </div>
    </div>



    <!-- ! ============== MASKED INPUT EXAMPLE ============== -->
    <div :class="$style.row">
      <!-- https://beholdr.github.io/maska/#/ -->
      <!-- v-maska not required -->
      <UIInput
        type="text"
        data-mask="+380-##-###-####"
        v-model="v$.testMask.$model"
      />
      <span>
        <i><b>Phone Number:</b> {{ v$.testMask.$model || 'Empty' }}</i>
      </span>
      <div v-for="error of v$.testMask.$errors" :key="error.$uid">
        {{ error.$message }}
      </div>
    </div>



    <!-- ! ============== MODAL EXAMPLE ============== -->
    <div :class="$style.row">
      <UIModal
        @hide="data.modal = false"
        :visible="data.modal"
      >
        <div style="padding: 2rem">
          <h2>
            {{ $t('helloWorld') }}
          </h2>
          <h4>
            {{ $t('helloWorld') }} {{ $t('helloWorld') }}
          </h4>
          <br />
          <br />
          <div style="display: flex;">
            <UIButton fill @click="data.modal = false" type="stroked">
              Закрыть
            </UIButton>
          </div>
        </div>
      </UIModal>
      <ModalAlert
        :visible="data.existingModal"
        @hide="data.existingModal = false"
      />
      <UIButton @click="data.modal = true" type="gray">
        {{
          data.modal
            ? 'Модальное окно открыто'
            : 'Открыть модальное окно'
        }}
      </UIButton>
      <UIButton @click="data.existingModal = true" type="gray">
        {{
          data.existingModal
            ? 'Существующее модальное окно открыто'
            : 'Открыть существующее модальное окно'
        }}
      </UIButton>
      <p :class="$style.description">
        <i>
          Кастомные модальные окна создаются в /components/Modal/* 
        </i>
      </p>
    </div>



    <!-- ! ============== CHECKBOX EXAMPLE ============== -->
    <div :class="$style.row">
      <span>
        <i><b>Checkbox:</b> {{ v$.switcher.$model }}</i>
      </span>
      <UISwitcher
        v-model="v$.switcher.$model"
      />
      <div v-for="error of v$.switcher.$errors" :key="error.$uid">
        {{ error.$message }}
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">
  import { useVuelidate } from '@vuelidate/core'
  import {
    helpers,
    minLength,
    maxLength,
    required,
    sameAs
  } from '@vuelidate/validators'

  const data = reactive({
    login: '',
    password: '',
    checkbox: false,
    switcher: false,
    modal: false,
    existingModal: false,
    testMask: ''
  })

  const rules = computed(() => ({
    login: {
      minLength: helpers.withMessage(
        'Минимальная длина логина 3 символа',
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        'Максимальная длина логина 32 символа',
        maxLength(32)
      ),
      required: helpers.withMessage(
        'Обязательное поле',
        required
      )
    },
    password: {
      minLength: helpers.withMessage(
        'Минимальная длина пароля 8 символов',
        minLength(8)
      ),
      maxLength: helpers.withMessage(
        'Максимальная длина пароля 64 символа',
        maxLength(64)
      ),
      required: helpers.withMessage(
        'Обязательное поле',
        required
      )
    },
    checkbox: {
      sameAs: helpers.withMessage(
        'Согласитесь с правилами использования',
        sameAs(true)
      )
    },
    switcher: {
      sameAs: helpers.withMessage(
        'Включите этот переключатель',
        sameAs(true)
      )
    },
    testMask: {
      required: helpers.withMessage(
        'Номер телефона обязателен',
        required
      )
    }
  }))
  const v$ = useVuelidate(rules, {
    login: toRef(data.login),
    password: toRef(data.password),
    checkbox: toRef(data.checkbox),
    switcher: toRef(data.switcher),
    testMask: toRef(data.testMask)
  })

  definePageMeta({ layout: 'empty' })
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