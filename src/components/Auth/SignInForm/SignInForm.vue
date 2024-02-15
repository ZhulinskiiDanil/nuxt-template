<template>
  <AuthFormWrapper
    @submit="submit"
    submitTitle="Войти"
    :disabled="(
      !v$.login.$model
        || !v$.password.$model
        || loading
    )"
  >
    <UIInputWrapper>
      <UIInput
        placeholder="Введите логин"
        v-model="v$.login.$model"
        :error="login.error || v$.login.$errors[0]?.$message"
      />
    </UIInputWrapper>
    <UIInputWrapper
      :link="{
        name: 'Забыл пароль',
        href: localePath('/auth/password-recovery')
      }"
    >
      <UIInput
        type="password"
        placeholder="Введите пароль"
        v-model="v$.password.$model"
        :error="password.error || v$.password.$errors[0]?.$message"
      />
    </UIInputWrapper>
  </AuthFormWrapper>
</template>

<script setup lang="ts">
  import { AuthErrors } from '@/ts/errors/auth';
  import { useVuelidate } from '@vuelidate/core'
  import { helpers, required } from '@vuelidate/validators'

  const getLocaleError = useGetLocaleError()

  const emit = defineEmits<{
    error: [error: string | null]
  }>()

  const { t } = useI18n()
  const { loadProfile } = useProfile()
  const localePath = useLocalePath()
  
  const loading = ref(false)
  const login = reactive({
    value: '', error: null as string | null
  })
  const password = reactive({
    value: '', error: null as string | null
  })

  const rules = computed(() => ({
    login: {
      required: helpers.withMessage('Обязательное поле', required)
    },
    password: {
      required: helpers.withMessage('Обязательное поле', required)
    }
  }))
  const v$ = useVuelidate(rules, {
    login: toRef(login, 'value'),
    password: toRef(password, 'value')
  })

  async function submit() {
    // loading.value = true
    // const response = await $api.auth.signIn({
    //   login: login.value,
    //   password: password.value
    // })
    
    // loading.value = false

    // if (response?.code) {
    //   switch (response.code) {
    //     case 'INVALID_CREDENTIALS':
    //       const error = getLocaleError('auth', AuthErrors.INVALID_CREDENTIALS)

    //       login.error = error
    //       password.error = error
    //       emit('error', `${t('main.error')}. ${error}`)
    //       break;
    //   }
    // }

    // if (response?.token) {
    //   loadProfile()
    //   return await navigateTo(localePath('/profile'))
    // }
  }
</script>

<style lang="scss" src="./SignInForm.module.scss" module></style>