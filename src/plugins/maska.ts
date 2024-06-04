import { vMaska } from 'maska';

export default defineNuxtPlugin((app) => {
  app.vueApp.directive('maska', vMaska);
});
