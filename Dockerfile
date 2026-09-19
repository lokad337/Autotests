FROM maven:3.9-eclipse-temurin-21

# Node.js нужен, чтобы allure-maven скачал и запустил CLI
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B

COPY src ./src

CMD ["mvn", "clean", "test"]