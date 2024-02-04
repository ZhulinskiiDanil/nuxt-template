export type ChangeEvent<T = Element> = Event & {
  target: T
}