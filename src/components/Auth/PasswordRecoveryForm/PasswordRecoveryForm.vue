<template>
  <AuthFormWrapper
    @submit="submit"
    submitTitle="Восстановить"
    :disabled="(
      (v$.email.$error || !email.value)
        || loading
    )"
  >
    <UIInputWrapper
      :link="{
        name: 'Вспомнили пароль',
        href: localePath('/auth/sign-in')
      }"
    >
      <UIInput
        placeholder="Email"
        v-model="v$.email.$model"
        :error="email.error || v$.email.$errors[0]?.$message"
      />
    </UIInputWrapper>
  </AuthFormWrapper>
</template>

<script setup lang="ts">
  import { AuthErrors } from '@/ts/errors/auth';
  import { useVuelidate } from '@vuelidate/core'
  import {
    helpers,
    required,
    email as emailValidator
  } from '@vuelidate/validators'

  const getLocaleError = useGetLocaleError()

  const emit = defineEmits<{
    error: [error: string | null]
  }>()

  const { t } = useI18n()
  const { loadProfile } = useProfile()
  const localePath = useLocalePath()
  
  const loading = ref(false)
  const email = reactive({
    value: '', error: null as string | null
  })

  const rules = computed(() => ({
    email: {
      required: helpers.withMessage(
        getLocaleError('auth', AuthErrors.EMPTY_EMAIL),
        required
      ),
      email: helpers.withMessage(
        getLocaleError('auth', AuthErrors.INVALID_EMAIL),
        emailValidator
      ),
    }
  }))
  const v$ = useVuelidate(rules, {
    email: toRef(email, 'value')
  })

  async function submit() {
    // loading.value = true
    // const response = await $api.auth.resetPassword({
    //   email: email.value
    // })
    // loading.value = false

    // if (response.success) {
    //   navigateTo(localePath('/auth/password-recovery-success'))
    // } else if (response?.code) {
    //   email.error = getLocaleError('auth', AuthErrors[response.code])
    // }
  }
</script>

<style lang="scss" src="./PasswordRecoveryForm.module.scss" module></style>