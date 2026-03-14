export const GRYNA_MOODS = {
  calm:    { emoji: '😌', color: '#4ade80', label: 'Спокійний' },
  tired:   { emoji: '😓', color: '#facc15', label: 'Втомлений' },
  stressed:{ emoji: '😤', color: '#f97316', label: 'На межі'   },
  panic:   { emoji: '🤯', color: '#ef4444', label: 'ПАНІКА'    },
}

export const GRYNA_QUOTES = {
  heal: [
    'О, нарешті! Я вже думав, ти мене забув.',
    'Це саме те, що мені потрібно. Ще б чаю...',
    'Відчуваю, як нейрони танцюють!',
    'Запишіть це в книгу мудрості.',
    'Ось так і треба зі мною поводитися.',
    'Я тебе люблю. Тихо, але люблю.',
  ],
  stress: [
    'Серйозно?! ЗАРАЗ?!',
    'Ще одне таке — і я вмикаю Netflix і нікуди не йду.',
    'Апокаліпсис починається з маленьких речей...',
    'Я просто залишу це тут і зроблю вигляд, що не бачив.',
    'Бюджет паніки вичерпано. Прошу стояти в черзі.',
    'Чудово. Просто чудово. Все горить.',
  ],
  win: [
    'Ти зробив це! Я пишаюся нами обома.',
    '7 днів без апокаліпсису — рекорд сезону!',
    'Тепер я готовий до нового тижня. Обережно.',
    'Ти довів: нове життя — це не з понеділка, а прямо зараз.',
  ],
  lose: [
    'Я ж казав... Я ж КАЗАВ.',
    'Починаю технічне обслуговування. Не турбувати.',
    "Запам'ятай: понеділок — це не кінопрем'єра нового життя.",
    'Гриня взяв лікарняний. Зателефонуйте після відпочинку.',
  ],
}

export const LEVELS = [
  { id: 1, name: 'Звичайний понеділок',  description: '3 події на день. Просто виживи.',           eventsPerDay: 3, days: 5,  extraStress: 0  },
  { id: 2, name: 'Складний тиждень',     description: 'Більше стресу. Більше спокуси.',             eventsPerDay: 3, days: 7,  extraStress: 5  },
  { id: 3, name: 'Місяць дедлайнів',     description: 'Тільки для справжніх героїв.',              eventsPerDay: 3, days: 10, extraStress: 10 },
]

export const ALL_TASKS = [
  { id:  1, text: '47 повідомлень без відповіді',  stress:  14, energy:  -8, type: 'stress', icon: '📱' },
  { id:  2, text: 'Неоплачений рахунок',           stress:  12, energy:  -6, type: 'stress', icon: '💸' },
  { id:  3, text: 'Складна розмова',               stress:  15, energy:  -7, type: 'stress', icon: '😬' },
  { id:  4, text: 'Телефон зранку',                stress:  10, energy:  -5, type: 'stress', icon: '🌅' },
  { id:  5, text: "Нове життя з понеділка",        stress:  18, energy: -10, type: 'stress', icon: '📅' },
  { id:  6, text: 'Самокритика',                   stress:  16, energy: -12, type: 'stress', icon: '😤' },
  { id:  7, text: 'Ще одна зустріч',               stress:  11, energy:  -8, type: 'stress', icon: '🗓️' },
  { id:  8, text: 'Прокрутка соцмереж',            stress:   9, energy:  -6, type: 'stress', icon: '📲' },
  { id:  9, text: 'Виписати все з голови',         stress: -15, energy:  10, type: 'heal',   icon: '📝' },
  { id: 10, text: '10 хвилин важкої справи',       stress: -10, energy:   8, type: 'heal',   icon: '⏱️' },
  { id: 11, text: '15 хвилин прогулянки',          stress: -12, energy:  12, type: 'heal',   icon: '🚶' },
  { id: 12, text: 'Нормально поїсти',              stress:  -8, energy:  10, type: 'heal',   icon: '🍲' },
  { id: 13, text: 'Душ і пауза',                   stress:  -9, energy:   9, type: 'heal',   icon: '🚿' },
  { id: 14, text: 'Одна завершена справа',         stress: -14, energy:  11, type: 'heal',   icon: '✅' },
  { id: 15, text: 'Добрий сон',                    stress: -16, energy:  15, type: 'heal',   icon: '😴' },
]
