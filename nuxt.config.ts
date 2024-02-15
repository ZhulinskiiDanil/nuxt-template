import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  vue: {
    propsDestructure: true
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.VITE_API_URL
    }
  },
  srcDir: './src/',
  ssr: false,
  css: [
    '~/assets/styles/globals.scss'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          href: '/fonts/RobotoFlex/RobotoFlex[GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght].woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: "anonymous"
        }
      ]
    }
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@request": path.resolve(__dirname, "./src/common/request.ts")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '~/assets/styles/_vars.scss';\n"
        }
      },
      modules: {
        generateScopedName: '[local]-v-[hash:base64:8]'
      }
    }
  },
  modules: [
    '@nuxtjs/i18n'
  ],
  plugins: [
    '~/plugins/maska.ts'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'ru',
    langDir: './locales',
    lazy: true,
    locales: [
      {
        code: 'en',
        file: 'ru-RU/index.ts', // TODO: Подключить язык en-EN/index.ts
        name: 'English'
      },
      {
        code: 'ru',
        file: 'ru-RU/index.ts',
        name: 'Русский'
      }
    ]
  }
})