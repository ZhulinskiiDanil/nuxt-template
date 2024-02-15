<template>
  <AuthWrapper
    :title="(
      (step === 3 && 'Введите капчу')
      || (step === 4 && 'Добро пожаловать!')
    )"
    :titleCentered="step === 4"
    :descriptionCentered="step === 4"
    :description="step === 4 && 'Добро пожаловать в мелонити! Вы успешно зарегистрировали аккаунт и теперь можете перейти в свой личный кабинет'"
    :backButton="step > 0 && step < 3"
    :steps="step > 0 && { current: step, max: 3 }"
    :footerText="footerText"
    :footerTextMaxWidth="step > 0 ? 380 : null"
    :checkboxText="step === 0 && 'У меня есть код приглашения'"
    :checkboxDisabled="!!$route.query?.ref"
    :logoVisible="step === 4"
    :tabs="step === 0 && [
      { name: 'Вход', href: localePath('/auth/sign-in') },
      { name: 'Регистрация', href: localePath('/auth/sign-up') }
    ]"
    
    v-model:checkbox="haveInviteCode"
    @backButtonClick="step = Math.max(--step, 0)"
    @fn="fnId => {
      if (fnId === 'CHANGE_EMAIL') step = 0
    }"
  >
    <AuthSignUpForm
      :step="step"
      :inviteCode="haveInviteCode ? (inviteCode || null) : null"
      @nextStep="step++"
      @prevStep="step--"
      @setStep="value => step = value"
      @email="value => email = value"
    />
    <template v-if="haveInviteCode && step === 0" #footer>
      <UIInput
        fill
        v-model="inviteCode"
        placeholder="Код"
        :readonly="!!$route.query?.ref"
      />
    </template>
  </AuthWrapper>
</template>

<script setup lang="ts">
  const { t } = useI18n()
  const route = useRoute()
  const localePath = useLocalePath()
  
  const step = ref(0)
  const haveInviteCode = ref(false)
  const inviteCode = ref('')
  const email = ref<string | null>(null)
  
  const footerText = computed(() => (
    step.value < 1 ? [
      { text: 'Вы соглашаетесь с ' },
      { text: 'Условиями предоставления услуг', linkHref: localePath('/') },
      { text: ', а также с ' },
      { text: 'Политикой конфиденциальности', linkHref: localePath('/') }
    ] : [
      { text: 'Вы создаете аккаунт для senyades@kringga.art\nЕсли вы не хотите создать новый аккаунт ' },
      { text: 'авторизуйтесь под другой почтой', fnId: 'CHANGE_EMAIL' },
    ]
  ))

  onMounted(() => {
    inviteCode.value = route.query?.ref || ''
    haveInviteCode.value = !!route.query?.ref
  })

  definePageMeta({ layout: 'auth' })
  useSeoMeta({ title: t('auth.signUp.seo.title') })
</script>
<style lang="scss" src="./index.module.scss" module></style>