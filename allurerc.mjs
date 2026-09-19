import { defineConfig } from "allure";

export default defineConfig({
  name: "Autotests Report",
  plugins: {
    awesome: {
      options: {
        // publish: true,  // закомментировали публикацию
      },
    },
  },
  // allureService: { ... }  // тоже можно убрать
});