require('dotenv').config();
const WebSocket = require('ws');
const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();
const server = app.listen(PORT, () => console.log(`Сервер запущено на порту ${PORT}`));

// Налаштування WebSocket-сервера
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('message', message)
        // Розсилка повідомлень всім підключеним клієнтам, окрім відправника
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
