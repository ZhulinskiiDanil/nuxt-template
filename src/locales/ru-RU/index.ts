export default {
  helloWorld: 'Привет мир',
  authorizedUserLinks: [
    { name: 'Главная', href: '/profile', icon: 'SVGGeneral' },
    {
      name: 'Настройки',
      href: '/profile/settings',
      icon: 'SVGSettings'
    },
    {
      name: 'Подписка',
      href: '/profile/subscription',
      icon: 'SVGCoin'
    },
    {
      name: 'Рефералка',
      href: '/profile/referral',
      icon: 'SVGAutododge'
    },
    {
      name: 'Google',
      href: 'https://www.google.com',
      icon: 'SVGSupport',
      external: true
    }
  ],
  main: {
    contactSupport: 'Связаться с поддержкой',
    downloadLauncher: 'Скачать лаунчер',
    download: 'Скачать'
  },
  errors: {
    auth: {
      EMPTY_LOGIN: 'Введите логин',
      EMPTY_EMAIL: 'Введите почту',
      EMPTY_CAPTCHA: 'Введите капчу',

      EMPTY_PASSWORD: 'Введите пароль',
      INVALID_PASSWORD: 'Неверный пароль',
      INVALID_OLD_PASSWORD: 'Неверный пароль',
      INVALID_PASSWORD_MIN_LENGTH:
        'Пароль должен быть больше 8 символов',
      PASSWORD_REPEAT_MISMATCH: 'Пароли не совпадают',

      INVALID_LOGIN_MIN_LENGTH:
        'Длина логин не меньше 3 симолов',
      INVALID_LOGIN_MAX_LENGTH:
        'Длина логин не больше 12 симолов',
      INVALID_LOGIN: 'Неверный логин',
      INVALID_CREDENTIALS: 'Неверные данные',
      TO_MANY_REQUESTS:
        'Вы отправяете слишком много запросов, подождите немного',
      INVALID_EMAIL: 'Неверный e-mail',
      EMAIL_NOT_FOUND:
        'Пользователя с такой почтой не существует',
      INVALID_CAPTCHA: 'Неверная капча',
      LOGIN_EXISTS:
        'Пользователь с таким логином уже существует',
      EMAIL_EXISTS:
        'Пользователь с таким e-mail уже зарегистрирован',
      INVALID_RESPONSE: 'Ошибка сервера',
      INVALID_CODE: 'Неверный код'
    }
  },
  header: {
    links: [
      { name: 'Главная', href: '/' },
      { name: 'Скрипты', href: '/' },
      { name: 'Цены', href: '/' },
      { name: 'Библиотека', href: '/', disabled: true },
      { name: 'Мерч', href: '/', disabled: true }
    ],
    buttons: {
      signIn: {
        name: 'Войти'
      },
      signUp: {
        name: 'Создать аккаунт'
      }
    },
    profile: {
      links: [
        { name: 'Личный кабинет', href: '/profile' },
        { name: 'Настройки', href: '/profile/settings' }
      ],
      buttons: {
        signOut: {
          name: 'Выход'
        }
      }
    }
  },
  footer: {
    linkLists: [
      {
        name: 'Навигация',
        links: [
          { name: 'Скрипты', href: '/' },
          { name: 'Новая версия', href: '/' },
          { name: 'Библиотека', href: '/', disabled: true },
          { name: 'Мерч', href: '/', disabled: true }
        ]
      },
      {
        name: 'Политика',
        links: [
          { name: 'Пользовательское соглашение', href: '/' },
          { name: 'Политика конфиденциальности', href: '/' },
          { name: 'Обработка данных', href: '/' }
        ]
      }
    ]
  },

  // ! PAGES
  profile: {
    seo: {
      title: 'Профиль'
    }
  },

  auth: {
    links: {
      forgotPassword: 'Забыли пароль?',
      notRegistred: 'Ещё не зарегистрированы?',
      registred: 'Уже зарегистрированы?',
      signUp: 'Регистрация',
      signIn: 'Войти'
    },
    captcha: {
      title: 'Подождите! А вы точно человек?',
      description: 'Пожалуйста, пройдите капчу',
      inputs: {
        code: {
          placeholder: 'Введите текст с картинки сюда'
        }
      },
      submit: 'Продолжить'
    },
    signIn: {
      seo: {
        title: 'Авторизация'
      },
      title: 'Авторизация',
      inputs: {
        login: {
          title: 'Логин',
          placeholder: 'Введите логин'
        },
        password: {
          title: 'Пароль',
          placeholder: 'Введите пароль'
        }
      },
      submit: 'Войти'
    },
    signUp: {
      seo: {
        title: 'Регистрация'
      },
      title: 'Регистрация',
      inputs: {
        login: {
          title: 'Логин',
          placeholder: 'Введите желаемый логин'
        },
        email: {
          title: 'EMAIL',
          placeholder: 'Введите вашу почту'
        },
        password: {
          title: 'Пароль',
          placeholder: 'Введите пароль',
          additional: '(Не менее 8 символов)'
        },
        repeatPassword: {
          title: 'Повторение пароля',
          placeholder: 'Повторите пароль'
        }
      },
      submit: 'Зарегистрироваться'
    },
    recoveryPassword: {
      seo: {
        title: 'Восстановление пароля'
      },
      title: 'Восстановление пароля',
      inputs: {
        email: {
          title: 'EMAIL',
          placeholder: 'Введите вашу почту'
        }
      }
    },
    passwordRecoverySuccess: {
      seo: {
        title: 'Восстановление пароля'
      }
    }
  }
};
