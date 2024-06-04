<template>
  <AuthFormWrapper
    @submit="submit"
    :isEmpty="step === 4"
    :submitTitle="
      (step === 3 && 'Продолжить') ||
      (step === 4 && 'Перейти в ЛК')
    "
    :submitLink="step === 4 && localePath('/profile')"
    :stepButtonTitle="step < 3 && 'Продолжить'"
    :disabled="
      [
        v$.email.$error || !email.value,
        v$.login.$error || !login.value,
        v$.password.$error ||
          v$.repeatPassword.$error ||
          !password.value
      ][step] || loading
    "
  >
    <UIInputWrapper v-if="step === 0">
      <UIInput
        placeholder="Email"
        autocomplete="new-password"
        v-model="v$.email.$model"
        :error="email.error || v$.email.$errors[0]?.$message"
      />
    </UIInputWrapper>
    <label
      tabindex="0"
      v-if="step === 1"
      :class="$style.uploadAvatar"
    >
      <img alt="Avatar" :src="avatar || defaultAvatar" />
      <p>
        {{ avatar ? 'Изменить' : 'Загрузить' }}
      </p>
      <input @change="changeAvatar" type="file" hidden />
    </label>
    <UIInputWrapper v-if="step === 1">
      <UIInput
        placeholder="Логин"
        autocomplete="new-password"
        v-model="v$.login.$model"
        :error="login.error || v$.login.$errors[0]?.$message"
      />
    </UIInputWrapper>
    <UIInputWrapper v-if="step === 2">
      <UIInput
        type="password"
        placeholder="Пароль"
        autocomplete="new-password"
        v-model="v$.password.$model"
        :error="
          password.error || v$.password.$errors[0]?.$message
        "
      />
    </UIInputWrapper>
    <UIInputWrapper
      v-if="step === 2"
      description="Пароль должен быть больше 8 символов"
    >
      <UIInput
        type="password"
        placeholder="Повторите пароль"
        autocomplete="new-password"
        v-model="v$.repeatPassword.$model"
        :error="
          repeatPassword.error ||
          v$.repeatPassword.$errors[0]?.$message
        "
      />
    </UIInputWrapper>
    <img
      v-if="captchaView && step === 3"
      :class="$style.captcha"
      :src="captchaView?.image"
    />
    <UIInputWrapper v-if="step === 3">
      <UIInput
        placeholder="Введите капчу"
        autocomplete="new-password"
        v-model="v$.captcha.$model"
        :error="captcha.error || v$.captcha.$errors[0]?.$message"
      />
    </UIInputWrapper>
  </AuthFormWrapper>
</template>

<script setup lang="ts">
import { AuthErrors } from '@/ts/errors/auth';
import { useVuelidate } from '@vuelidate/core';
import {
  helpers,
  required,
  minLength,
  maxLength,
  email as emailValidator,
  sameAs
} from '@vuelidate/validators';

// type Captcha = Awaited<ReturnType<typeof $api.auth.getCaptcha>>

const props = defineProps<{
  step: number;
  inviteCode?: string | null;
}>();
const emit = defineEmits<{
  nextStep: [];
  prevStep: [];
  setStep: [step: number];
  email: [email: string | null];
}>();

const getLocaleError = useGetLocaleError();

const { t } = useI18n();
const { loadProfile } = useProfile();
const localePath = useLocalePath();
const defaultAvatar = useDefaultAvatar();

const loading = ref(false);
const avatar = ref<string | null>(null); // base64
const login = reactive({
  value: '',
  error: null as string | null
});
const email = reactive({
  value: '',
  error: null as string | null
});
const repeatPassword = reactive({
  value: '',
  error: null as string | null
});
const password = reactive({
  value: '',
  error: null as string | null
});
const captcha = reactive({
  value: '',
  error: null as string | null
});
// const captchaView = ref<Captcha>(null)

const rules = computed(() => ({
  login: {
    required: helpers.withMessage(
      getLocaleError('auth', AuthErrors.EMPTY_LOGIN),
      required
    ),
    minLength: helpers.withMessage(
      getLocaleError(
        'auth',
        AuthErrors.INVALID_LOGIN_MIN_LENGTH
      ),
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      getLocaleError(
        'auth',
        AuthErrors.INVALID_LOGIN_MAX_LENGTH
      ),
      maxLength(12)
    )
  },
  email: {
    required: helpers.withMessage(
      getLocaleError('auth', AuthErrors.EMPTY_EMAIL),
      required
    ),
    email: helpers.withMessage(
      getLocaleError('auth', AuthErrors.INVALID_EMAIL),
      emailValidator
    )
  },
  password: {
    minLength: helpers.withMessage(
      getLocaleError(
        'auth',
        AuthErrors.INVALID_PASSWORD_MIN_LENGTH
      ),
      minLength(8)
    ),
    sameAs: helpers.withMessage(
      getLocaleError(
        'auth',
        AuthErrors.PASSWORD_REPEAT_MISMATCH
      ),
      sameAs(repeatPassword.value)
    ),
    required: helpers.withMessage(
      getLocaleError('auth', AuthErrors.EMPTY_PASSWORD),
      required
    )
  },
  repeatPassword: {
    sameAs: helpers.withMessage(
      getLocaleError(
        'auth',
        AuthErrors.PASSWORD_REPEAT_MISMATCH
      ),
      sameAs(password.value)
    ),
    required: helpers.withMessage(
      getLocaleError('auth', AuthErrors.EMPTY_PASSWORD),
      required
    )
  },
  captcha: {
    required: helpers.withMessage(
      getLocaleError('auth', AuthErrors.EMPTY_CAPTCHA),
      required
    )
  }
}));
const v$ = useVuelidate(rules, {
  login: toRef(login, 'value'),
  email: toRef(email, 'value'),
  password: toRef(password, 'value'),
  repeatPassword: toRef(repeatPassword, 'value'),
  captcha: toRef(captcha, 'value')
});

async function fetchCaptcha() {
  // const captchaResponse = await $api.auth.getCaptcha()
  // captcha.value = ''
  // captchaView.value = captchaResponse
}

async function signUp() {
  // if (!captchaView.value) return
  // loading.value = true
  // const response = await $api.auth.signUp({
  //   email: email.value,
  //   login: login.value,
  //   password: password.value,
  //   captchaId: captchaView.value.id,
  //   captchaValue: captcha.value,
  //   referral: props?.inviteCode || null
  // })
  // if (response?.token) {
  //   await Promise.all([
  //     avatar.value && await $api.profile.uploadAvatar(avatar.value),
  //     await loadProfile()
  //   ])
  //   emit('nextStep')
  // }
  // loading.value = false
  // if (response?.code) {
  //   // const authError = getLocaleError('auth', response.code)
  //   fetchCaptcha()
  //   switch (response.code) {
  //     case 'INVALID_EMAIL':
  //       emit('setStep', 0)
  //       email.error = getLocaleError('auth', AuthErrors.INVALID_EMAIL)
  //       break;
  //     case 'INVALID_LOGIN':
  //       emit('setStep', 1)
  //       login.error = getLocaleError('auth', AuthErrors.INVALID_LOGIN)
  //       break;
  //     case 'INVALID_PASSWORD':
  //       emit('setStep', 2)
  //       password.error = getLocaleError('auth', AuthErrors.INVALID_PASSWORD)
  //       break;
  //     case 'INVALID_CAPTCHA':
  //       emit('setStep', 3)
  //       captcha.error = getLocaleError('auth', AuthErrors.INVALID_CAPTCHA)
  //       break;
  //     case 'LOGIN_EXISTS':
  //       emit('setStep', 1)
  //       login.error = getLocaleError('auth', AuthErrors.LOGIN_EXISTS)
  //       break;
  //   }
  // }
}

async function submit() {
  if (props.step < 3) {
    if (props.step === 0) {
      emit('email', email.value);
    }

    emit('nextStep');
  } else {
    signUp();
  }
}

async function changeAvatar(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0] || null;

  if (file) {
    const base64 = await $utils.file.getBase64(file);

    if (typeof base64 === 'string') {
      avatar.value = base64;
    }
  } else {
    avatar.value = null;
  }
}

onMounted(() => {
  fetchCaptcha();
});
</script>

<style lang="scss" src="./SignUpForm.module.scss" module></style>
