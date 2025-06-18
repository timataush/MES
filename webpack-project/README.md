# Webpack Project

Проект, собранный с использованием Webpack 

## 📦 Установка зависимостей
```bash
npm install
```

## 🚀 Запуск проекта

Production-сборка

```bash 
npm run build
```
Собранные файлы появятся в папке public/build/

Режим разработки (с hot-reload)

```bash
npm start
```
## 🛠 Структура проекта

```webpack-project/
├── app/
│   ├── assets/           # Изображения и статические файлы
│   ├── main.js           # Главный JS-файл
│   ├── styles.scss       # SCSS-стили
│   └── index.html        # HTML-шаблон
├── public/               # Автогенерируемая папка
│   └── build/
│       ├── app.bundle.js # Собранный JS
│       └── assets/       # Оптимизированные изображения
├── webpack.config.js     # Конфигурация Webpack
└── package.json
```



## ✅ Проверка функционала

Проект должен:

Выводить текст "Hello Webpack!" на странице
Применять стили из SCSS-файла
Отображать подключенное изображение
Автоматически обновляться при изменениях в dev-режиме
Создавать минифицированную сборку для production
🔧 Решение возможных проблем

Если возникают ошибки:

1. Удалите папки node_modules и public:


```bash 
rm -rf node_modules public
```
2. Переустановите зависимости:

```bash
npm install
```