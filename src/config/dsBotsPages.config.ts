export const dsPages = {
  dsPage: {
    title: 'Discord раздел BNFR Admin',
    subtitle: 'Выберите категорию для управления',
    sections: {
      dsBots: {
        title: 'Управление discord ботами',
        path: '/discord/bots',
        status: 'active',
        textButton: 'Перейти к настройке',
      },
      workshop: {
        title: 'Мастерская настроек discord бота',
        status: 'dev',
      },
    },
  },
  discordBots: {
    title: 'Боты Discord',
    subtitle: 'Выберите бота для управления',
  },
  addDsBot: {
    title: 'Добавить бота',
    subtitle: 'Введите данные для добавления нового бота',
  },
  dsBotPage: {
    title: 'Функции бота',
    subtitle: 'Выберите что хотите сделать с ботом',
    sections: {
      servers: {
        title: 'Управлять настройками бота discord сервера',
        path: '/discord/bots/bot/servers',
        status: 'active',
        textButton: 'Перейти к серверу',
      },
      directMessages: {
        title: 'Управлять настройками в личных сообщениях бота',
        status: 'dev',
      },
    },
  },
  listServersDsBot: {
    title: 'Список серверов бота',
    subtitle: 'Выберите сервер для управления',
  },
  dsBotServerAction: {
    title: 'Настройки',
    subtitle: 'Выберите настройку',
  },
  dsBotPushMessage: {
    title: 'Отправить сообщение',
    subtitle: 'Введите данные для отправки сообщения',
  },
} as const
