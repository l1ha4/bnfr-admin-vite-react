## Production API URL

- Рекомендуемый вариант: same-origin через reverse proxy и `VITE_API_URL=/api`.
- Альтернатива: прямой HTTPS API URL (`https://api.example.com`), если CORS и cookie настроены корректно.
- Пример production переменных: `.env.production.example`.

## Development API URL

- Для локальной разработки через Vite proxy используйте `VITE_API_URL=/api`.
- Пример development переменных: `.env.development.example`.
