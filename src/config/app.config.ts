export const appConfig = {
  nameApp: 'BNFR Admin',
} as const

export const titleRouter = {
  textButton: 'Перейти к разделу',
  sections: [
    { path: 'discord', title: 'Discord', status: 'active' },
    { path: null, title: 'Monopoly', status: 'dev' },
  ],
} as const
