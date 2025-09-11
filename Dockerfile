# --- Этап сборки (Build Stage) ---
# Используем официальный образ Node.js для сборки приложения
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и yarn.lock/package-lock.json для установки зависимостей
# Это позволяет Docker кэшировать слой с зависимостями, если они не изменились
COPY package.json yarn.lock* ./

# Устанавливаем зависимости

COPY package.json package-lock.json* ./
COPY prisma ./prisma

# Используйте `npm install` если вы используете npm
RUN npm install --frozen-lockfile

# Копируем весь остальной код приложения
COPY . .

# Генерируем Prisma Client и запускаем сборку Next.js
# NEXT_PUBLIC_*: переменные, доступные на клиенте
# NEXT_*: переменные, доступные только на сервере
# DATABASE_URL: переменная для Prisma, указывающая на вашу базу данных MongoDB
ENV NEXT_PUBLIC_BASE_URL=https://mordvintsef.ru

ENV NODE_ENV=production
RUN npx prisma generate
RUN npm run build

# --- Этап продакшена (Production Stage) ---
# Используем более легковесный образ Node.js для продакшена
FROM node:20-alpine AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем переменные окружения для продакшена
ENV NODE_ENV=production

# Копируем только необходимые файлы из этапа сборки
# Копируем собранный Next.js-проект
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.production ./.env.production

# Если вы используете Prisma, вам также нужно скопировать бинарники Prisma Client
# Путь может отличаться в зависимости от вашей OS и архитектуры
# Обычно они находятся в node_modules/.prisma/client/
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

# Открываем порт, на котором будет работать Next.js
EXPOSE 3000

# Запускаем Next.js приложение в продакшен-режиме
CMD ["npm", "start"]