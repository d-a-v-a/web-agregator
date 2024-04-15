Примеры запросов:

Проект:
/api/projects/register/ - загрузка проекта (POST)
{
"title": "Project 1",
"description": "Description of Project 1",
"how_to_play": "How to play Project 1"
}

/api/projects/ - вывод списка всех проектов (GET)

/api/projects/categories=<str:category>/ - вывод списка всех проектов категории аркада (GET)

/api/projects/<int:pk>/ - вывод проекта под id=1 (POST)

/api/projects/<int:pk>/update/ - изменение информации о проекте id=1 (PUT)

/api/projects/<int:pk>/delete/ - удаление проекта id=1 (DELETE)

/api/projects/<int:pk>/vote/ - поставить голос проекту по id (POST)
{
"rating":5
}


Профиль:

/api/login/ - авторизация (POST)
{
"username":""username1",
"password":"password1"
}

/api/register/ - регистрация (POST)
{
"username":""username1",
"password":"password1"
}

/api/profile/ - вывод информации профиля (GET)

/api/logout/ - выход из аккаунта
