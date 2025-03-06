## Запуск

Запуск микрофронтенда Корзина:
```bash
cd client/services/cart yarn start
```

Запуск микрофронтенда Информация о книге:
```bash
cd client/services/books-info yarn start
```

Запуск микрофронтенда Оформление и оплата заказа:
```bash
cd client/services/payment yarn start
```

Для интеграции микрофронтендов вместе нужно запустить их с приложеним контейнером\
Запуск микрофронтенда контейнера + Список книг:
```bash
cd client/services/host yarn start
```