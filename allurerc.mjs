import { defineConfig } from "allure";

export default defineConfig({
  name: "Autotests Report",
  plugins: {
    awesome: {
      options: {
        publish: true, // Включает автоматическую публикацию отчёта
      },
    },
  },
  allureService: {
    accessToken: process.env.ALLURE_SERVICE_ACCESS_TOKEN, // Токен будет передан через переменную окружения
  },
});