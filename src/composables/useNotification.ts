import type {
  NotificationMessage,
  MessageHandler
} from '@/ts/notifications';

const handlers: MessageHandler[] = [];
const messages: NotificationMessage[] = [];

export function useNotification(
  handler?: MessageHandler['fn'],
  type: string | null = null
) {
  if (handler instanceof Function) {
    handlers.push({ type, fn: handler });
  }

  return {
    push,
    removeById
  };
}

function onMessage(message: NotificationMessage, data?: any) {
  handlers.forEach((handler) => {
    const isHandlerByMessageType =
      handler.type && message.type === handler.type;

    if (isHandlerByMessageType) {
      handler.fn(message, data || null);
    } else if (!handler.type && !message.type) {
      handler.fn(message, data || null);
    }
  });
}

type PushOptions = {
  title?: string;
  content: string;
  data?: any;
};

function push(options: PushOptions, type: string | null = null) {
  const message = {
    id: $utils.shared.uuid(),
    title: options.title || null,
    content: options.content,
    type
  };

  messages.push(message);
  onMessage(message, options.data);

  return message;
}

function removeById(msgId: string) {
  const msgIndex = messages.findIndex((msg) => msg.id === msgId);

  if (msgIndex) {
    messages.splice(msgIndex, 1);
  }
}
