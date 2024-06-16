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

`cd API`

2. Создаем виртуальное окружение.

`python -m venv venv`

3. Запускаем виртуальное окружение.

`source venv/bin/activate`
или
`venv\Scripts\activate`
4. Устанавливаем зависимости.

`pip install -r requirements.txt`

5. Создаем миграции.

```
python backend/manage.py makemigrations
python backend/manage.py migrate
python backend/manage.py migrate --run-syncdb
```

6. Запускаем сервер.

`python backend/manage.py runserver`