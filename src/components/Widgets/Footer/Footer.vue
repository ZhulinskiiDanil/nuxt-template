<template>
  <footer :class="$style.footer">
    <div :class="$style.cw">
      <div :class="$style.flex">
        <NuxtLink :to="localePath('/')">
          LOGO
        </NuxtLink>
        <div :class="$style.linksWrapper">
          <div
            v-for="linkList in linkLists"
            :key="$rt(linkList.name)"
            :class="$style.links"
          >
            <div :class="$style.title">
              {{ $rt(linkList.name) }}
            </div>
            <ul :class="$style.list">
              <NuxtLink
                :class="$style.link"
                v-for="link in linkList.links"
                :key="$rt(link.href)"
                :to="$rt(link.href)"
              >
                {{ $rt(link.name) }}
              </NuxtLink>
            </ul>
          </div>
        </div>
        <UIButton
          :class="$style.button"
          uppercase
        >
          {{ $t('main.contactSupport') }}
        </UIButton>
      </div>
      <div :class="$style.end">
        <p :class="$style.copyright">
          © NUXT-CORE, {{ new Date().getFullYear() }}
        </p>
        <div data-animated :class="$style.social">
          <SVGDiscord   :class="$style.icon" />
          <SVGTelegram  :class="$style.icon" />
          <SVGVK        :class="$style.icon" />
          <SVGYouTube   :class="$style.icon" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  interface ILink {
    href: string,
    name: string
  }

  const { tm } = useI18n()
  const localePath = useLocalePath()
  
  const linkLists = computed<{
    name: string,
    links: ILink[]
  }[]>(() => tm('footer.linkLists') || [])
</script>

<style lang="scss" src="./Footer.module.scss" module></style>
