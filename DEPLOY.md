# Деплой Medcol Landing на VPS

## Содержание
- [Быстрый старт (Azure VM)](#быстрый-старт-azure-vm)
- [Требования к серверу](#требования-к-серверу)
- [Подготовка сервера](#подготовка-сервера)
- [Быстрый деплой](#быстрый-деплой)
- [Настройка SSL](#настройка-ssl)
- [Обновление сайта](#обновление-сайта)
- [Полезные команды](#полезные-команды)
- [Устранение проблем](#устранение-проблем)
- [Архитектура](#архитектура)

---

## Быстрый старт (Azure VM)

Сервер: `Standard B2als v2` (2 vCPU, 4 GB RAM), Ubuntu 24.04, IP: `20.174.26.198`

### Шаг 1: Полный деплой одной командой

```bash
# Из директории проекта на локальной машине:
./remote-deploy.sh setup
```

Это выполнит:
1. Подключение к серверу по SSH (`~/.ssh/leo`)
2. Установку Docker, настройку файрвола, создание swap
3. Загрузку файлов проекта через rsync
4. Сборку Docker-образа и запуск

Результат: сайт доступен на **http://20.174.26.198**

### Шаг 2: После внесения изменений

```bash
./remote-deploy.sh build     # загрузить + пересобрать
./remote-deploy.sh logs      # логи сервера
./remote-deploy.sh status    # статус контейнеров
./remote-deploy.sh ssh       # подключиться к серверу
```

### Скрипты для деплоя

| Скрипт | Где запускать | Назначение |
|--------|--------------|-----------|
| `remote-deploy.sh` | **Локально** (Mac) | Загрузка + сборка на сервере через SSH |
| `server-setup.sh` | **На сервере** | Первичная настройка (Docker, UFW, swap) |
| `deploy.sh` | **На сервере** | Управление контейнерами (start/stop/ssl) |

---

## Требования к серверу

| Параметр | Минимум | Рекомендуется |
|----------|---------|---------------|
| ОС | Ubuntu 22.04+ / Debian 12+ | Ubuntu 24.04 LTS |
| RAM | 1 GB | 2 GB |
| CPU | 1 vCPU | 2 vCPU |
| Диск | 10 GB | 20 GB SSD |
| Порты | 80, 443 | 80, 443, 22 |

---

## Подготовка сервера

### 1. Обновление системы

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Установка Docker

```bash
# Установка Docker
curl -fsSL https://get.docker.com | sh

# Добавление пользователя в группу docker
sudo usermod -aG docker $USER

# Перелогиниться или выполнить
newgrp docker

# Проверка
docker --version
docker compose version
```

### 3. Установка Git (если не установлен)

```bash
sudo apt install -y git
```

### 4. Настройка файрвола (UFW)

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status
```

---

## Быстрый деплой

### Вариант 1: Через скрипт

```bash
# Клонирование репозитория
git clone https://github.com/eizorerad/medcol-simple-landing.git
cd medcol-simple-landing

# Запуск
chmod +x deploy.sh
./deploy.sh
```

Сайт будет доступен по `http://<IP-сервера>`.

### Вариант 2: Вручную

```bash
# Клонирование
git clone https://github.com/eizorerad/medcol-simple-landing.git
cd medcol-simple-landing

# Сборка и запуск
docker compose up -d --build

# Проверка статуса
docker compose ps
```

---

## Настройка SSL (HTTPS)

### Шаг 1: Убедитесь, что домен направлен на сервер

DNS A-записи вашего домена должны указывать на IP сервера:
```
A   your-domain.com      → IP_СЕРВЕРА
A   www.your-domain.com  → IP_СЕРВЕРА
```

### Шаг 2: Получение сертификата

```bash
DOMAIN=your-domain.com EMAIL=admin@your-domain.com ./deploy.sh ssl
```

### Шаг 3: Обновление nginx.conf

Откройте `nginx.conf` и выполните следующие изменения:

1. **Замените** все `your-domain.com` на ваш домен
2. **Раскомментируйте** блок `HTTPS server block` (внизу файла)
3. **Раскомментируйте** блок `HTTP -> HTTPS redirect` 
4. **Закомментируйте** блок `Main server block (HTTP)`

```bash
# Отредактировать конфиг
nano nginx.conf

# Перезапустить nginx
docker compose restart nginx
```

### Шаг 4: Проверка

```bash
# Проверка через curl
curl -I https://your-domain.com
```

---

## Обновление сайта

```bash
cd medcol-simple-landing
./deploy.sh update
```

Или вручную:

```bash
git pull origin main
docker compose up -d --build
```

---

## Полезные команды

| Команда | Описание |
|---------|----------|
| `./deploy.sh` | Сборка и запуск |
| `./deploy.sh stop` | Остановка всех контейнеров |
| `./deploy.sh logs` | Просмотр логов в реальном времени |
| `./deploy.sh update` | Обновление (pull + rebuild) |
| `./deploy.sh ssl` | Настройка SSL сертификата |
| `docker compose ps` | Статус контейнеров |
| `docker compose logs app` | Логи Next.js приложения |
| `docker compose logs nginx` | Логи Nginx |
| `docker compose restart app` | Перезапуск приложения |
| `docker compose down` | Остановка и удаление контейнеров |
| `docker compose up -d --build` | Пересборка и запуск |
| `docker system prune -af` | Очистка неиспользуемых образов |

---

## Устранение проблем

### Сайт не открывается

```bash
# Проверить статус контейнеров
docker compose ps

# Проверить логи
docker compose logs app
docker compose logs nginx

# Проверить порты
sudo ss -tlnp | grep -E '80|443'
```

### Ошибка сборки Docker

```bash
# Полная пересборка без кэша
docker compose build --no-cache
docker compose up -d
```

### Нехватка памяти при сборке

На серверах с 1 GB RAM сборка Next.js может упасть. Решение:

```bash
# Создать swap-файл
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Сделать swap постоянным
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Повторить сборку
docker compose up -d --build
```

### Certbot не может получить сертификат

- Убедитесь, что порт 80 свободен: `sudo ss -tlnp | grep 80`
- Убедитесь, что DNS указывает на ваш сервер: `dig +short your-domain.com`
- Остановите nginx перед получением: `docker compose stop nginx`

---

## Архитектура

```
┌─────────────┐     ┌─────────────┐     ┌─────────────────┐
│   Клиент    │────▶│    Nginx    │────▶│   Next.js App   │
│  (Браузер)  │     │  (порт 80/  │     │  (порт 3000,    │
│             │◀────│   443)      │◀────│   standalone)   │
└─────────────┘     └─────────────┘     └─────────────────┘
                          │
                    ┌─────────────┐
                    │   Certbot   │
                    │ (Let's      │
                    │  Encrypt)   │
                    └─────────────┘
```

**Стек:**
- **Next.js 16** — React-фреймворк, standalone-режим
- **Node.js 22 Alpine** — минимальный Docker-образ
- **Nginx** — reverse proxy, gzip, кэширование статики, SSL
- **Certbot** — автоматические SSL сертификаты от Let's Encrypt
- **Docker Compose** — оркестрация контейнеров

**Созданные файлы для деплоя:**
| Файл | Назначение |
|------|-----------|
| `Dockerfile` | Multi-stage сборка Next.js приложения |
| `docker-compose.yml` | Оркестрация: app + nginx + certbot |
| `nginx.conf` | Конфигурация reverse proxy |
| `deploy.sh` | Скрипт автоматизации деплоя |
| `.dockerignore` | Исключения для Docker-контекста |
| `next.config.mjs` | Обновлён: добавлен `output: "standalone"` |