const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Указываем папку с статическими файлами
app.use(express.static(path.join(__dirname, "public")));

// Основная страница
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Обработка всех остальных маршрутов (404)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "error.html"));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
