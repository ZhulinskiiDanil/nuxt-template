// Guards
import { authMiddleware } from './guards';

const middlewares = {
  auth: authMiddleware
};

export type GuardType = keyof typeof middlewares;
export function Guard(guardType: GuardType) {
  const defaultMiddleware = defineNuxtRouteMiddleware(() => {});

  const middleware = middlewares[guardType];
  return middleware || defaultMiddleware;
}
