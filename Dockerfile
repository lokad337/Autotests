FROM maven:3.9-eclipse-temurin-21

# Устанавливаем Node.js и Allure CLI (требуется для Allure 3)
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g allure \
    && apt-get clean

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src

CMD ["mvn", "clean", "test"]