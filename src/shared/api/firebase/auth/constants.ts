export const AUTH_ERRORS: Record<string, string> = {
  "auth/invalid-email": "Неверный формат email",
  "auth/wrong-password": "Неверный пароль",
  "auth/user-not-found": "Пользователь не найден",
  "auth/too-many-requests": "Слишком много попыток. Попробуйте позже",
  "auth/email-already-in-use": "Email уже используется",
  "auth/weak-password": "Пароль должен содержать минимум 6 символов",
  "auth/operation-not-allowed": "Операция не разрешена",
  "auth/network-request-failed": "Ошибка сети",
  "auth/invalid-credential": "",
} as const;
