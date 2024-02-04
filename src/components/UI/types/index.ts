import { defineNuxtConfig } from "nuxt/config"

export type NuxtUIConfig = Parameters<typeof defineNuxtConfig>["0"]
export type UIKitElementTheme = "dark" | "light"

export type UIConfig = {
  defaultTheme?: UIKitElementTheme
  getTheme?: () => { value: UIKitElementTheme }
}