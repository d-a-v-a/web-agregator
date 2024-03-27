## Инструкция по запуску бэкенда 

1.  Переходим в папку бэкенда.

`cd backend`

2. Создаем виртуальное окружение.

`python3 -m venv venv`

3. Запускаем виртуальное окружение.

`source venv/bin/activate`

4. Устанавливаем зависимости.

`pip install pip install -r requirements.txt`

5. Создаем миграции.

```
python my_site/manage.py makemigrations
python my_site/manage.py migrate
python manage.py migrate --run-syncdb
```

6. Запускаем сервер.

`python my_site/manage.py runserver`
