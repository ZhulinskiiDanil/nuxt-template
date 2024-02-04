<template>
  <div :class="$style.container">
    <div :class="$style.list">
      <WidgetsNotificationsNotification
        v-for="notification in notifications.slice(-2)"
        :title="notification.title || ''"
        :content="notification.content"
        :error="!!notification.error"
        :key="notification.id"
      >
        <template #icon>
          <SVGBlocked v-if="notification.error" />
          <SVGCheck v-if="notification.success" />
        </template>
      </WidgetsNotificationsNotification>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { NotificationMessage } from '@/ts';

  type MessageData = {
    error?: boolean
    success?: boolean
  }

  const notifications = ref<(NotificationMessage & MessageData)[]>([])
  const TIME_TO_REMOVE = 5000

  useNotification((message, data?: MessageData) => {
    notifications.value.push({
      ...message, ...(data || {})
    })

    setTimeout(() => {
      const messageIndex = notifications.value
        .findIndex(elm => elm.id === message.id)

        if (messageIndex >= 0) {
          notifications.value.splice(messageIndex, 1)
        }
    }, TIME_TO_REMOVE);
  })
</script>

<style lang="scss" src="./Notifications.module.scss" module></style>