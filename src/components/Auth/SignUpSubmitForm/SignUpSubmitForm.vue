<template>
  <AuthFormWrapper
    @submit="submit"
    submitTitle="Нажми на меня"
    :submitDisabled="(
      !v$.login.$model
        || !v$.password.$model
        || loading
    )"
  >
    {{ $t('helloWorld') }}
  </AuthFormWrapper>
</template>

<script setup lang="ts">
  import { useVuelidate } from '@vuelidate/core'
  import { helpers, required } from '@vuelidate/validators'

  const { Api } = useApi()
  
  const emit = defineEmits<{
    error: [error: string | null]
  }>()

  // const { t } = useI18n()
  // const { loadProfile } = useProfile()
  // const localePath = useLocalePath()
  
  const loading = ref(false)
  const error = ref<string | null>(null)
  const data = reactive({
    login: { value: "", error: null },
    password: { value: "", error: null }
  })

  const rules = computed(() => ({
    login: {
      minLength: helpers.withMessage('Обязательное поле', required)
    },
    password: {
      minLength: helpers.withMessage('Обязательное поле', required)
    }
  }))
  const v$ = useVuelidate(rules, {
    login: toRef(data.login.value),
    password: toRef(data.password.value)
  })

  async function submit() {
    // restoreErrors()
    // const { login, password } = data

    // loading.value = true
    // const response = await Api.auth.signIn({
    //   login: login.value,
    //   password: password.value
    // })
    
    // loading.value = false

    // if (response?.code) {
    //   switch (response.code) {
    //     case 'INVALID_CREDENTIALS':
    //       const error = getError(AuthErrors.INVALID_CREDENTIALS)

    //       data.login.error = error
    //       data.password.error = error
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

<style lang="scss" src="./SignUpSubmitForm.module.scss" module></style>