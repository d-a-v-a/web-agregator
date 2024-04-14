# web-agregator
## frontend
Проект Web-agregator: Платформа для размещения webGL проектов командами студентов.

Инструкция по локальному запуску фронтэнда
1. установить ноду https://nodejs.github.io/nodejs.dev/en/download/
2. перейти в директорию frontend в редакторе
3. запустить установку пакетов командой npm install
4. запустить развертывание проекта npm start

   чтобы собрать билд, используем команду npm run build

## backend

1.  Переходим в папку бэкенда.

`cd backend`

2. Создаем виртуальное окружение.

`python3 -m venv venv`

3. Запускаем виртуальное окружение.

`source venv/bin/activate`

4. Устанавливаем зависимости.

`pip install -r requirements.txt`

5. Создаем миграции.

```
python my_site/manage.py makemigrations
python my_site/manage.py migrate
python my_site/manage.py migrate --run-syncdb
```

6. Запускаем сервер.

`python my_site/manage.py runserver`