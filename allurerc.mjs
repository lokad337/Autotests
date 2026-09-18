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
    url: "http://192.168.1.182:3000",
    accessToken: process.env.ALLURE_SERVICE_ACCESS_TOKEN, // Токен будет передан через переменную окружения
  },
});