import { GRYNA_MOODS, GRYNA_QUOTES } from './data.js'

export const clamp = (v) => Math.max(0, Math.min(100, v))

export const getRandomItems = (arr, n) =>
  [...arr].sort(() => Math.random() - 0.5).slice(0, n)

export const getRandomQuote = (type) => {
  const arr = GRYNA_QUOTES[type]
  return arr[Math.floor(Math.random() * arr.length)]
}

export const getMood = (stress, energy) => {
  if (stress >= 75 || energy <= 20) return GRYNA_MOODS.panic
  if (stress >= 55 || energy <= 40) return GRYNA_MOODS.stressed
  if (stress >= 35 || energy <= 60) return GRYNA_MOODS.tired
  return GRYNA_MOODS.calm
}
