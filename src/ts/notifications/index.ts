export type NotificationMessage = {
  id: string;
  title: string | null;
  content: string;
  type: string | null;
};

export type MessageHandler = {
  type: string | null;
  fn: (msg: NotificationMessage, data?: any) => void;
};
