import { useState, useEffect } from 'react'
import { ALL_TASKS, LEVELS } from './data.js'
import { clamp, getRandomItems, getRandomQuote, getMood } from './utils.js'
import MenuScreen    from './screens/MenuScreen.jsx'
import GameScreen    from './screens/GameScreen.jsx'
import GameOverScreen from './screens/GameOverScreen.jsx'

export default function App() {
  const [screen, setScreen]       = useState('menu')  // menu | game | over
  const [level, setLevel]         = useState(LEVELS[0])
  const [stress, setStress]       = useState(40)
  const [energy, setEnergy]       = useState(60)
  const [day, setDay]             = useState(1)
  const [score, setScore]         = useState(0)
  const [choices, setChoices]     = useState([])
  const [log, setLog]             = useState([])
  const [grynaSays, setGrynaSays] = useState('')
  const [win, setWin]             = useState(false)
  const [animating, setAnimating] = useState(false)

  const mood = getMood(stress, energy)

  const startGame = (lvl) => {
    setLevel(lvl)
    setStress(40)
    setEnergy(60)
    setDay(1)
    setScore(0)
    setLog([])
    setWin(false)
    setAnimating(false)
    setChoices(getRandomItems(ALL_TASKS, lvl.eventsPerDay))
    setGrynaSays('Починаємо. Без апокаліпсису, будь ласка.')
    setScreen('game')
  }

  const pickCard = (card) => {
    if (animating) return
    setAnimating(true)

    const extra      = level.extraStress || 0
    const stressDelta = card.type === 'stress' ? card.stress + extra : card.stress
    const ns  = clamp(stress + stressDelta)
    const ne  = clamp(energy + card.energy)
    const ns2 = score + (card.type === 'heal' ? 15 : 3)

    setStress(ns)
    setEnergy(ne)
    setScore(ns2)
    setGrynaSays(getRandomQuote(card.type))
    setLog(prev => [
      { day, text: card.text, type: card.type, icon: card.icon, stress: stressDelta, energy: card.energy },
      ...prev,
    ])

    setTimeout(() => {
      const nextDay = day + 1
      if (ns >= 100 || ne <= 0) {
        setGrynaSays(getRandomQuote('lose'))
        setWin(false)
        setScreen('over')
      } else if (nextDay > level.days) {
        setGrynaSays(getRandomQuote('win'))
        setWin(true)
        setScreen('over')
      } else {
        setDay(nextDay)
        setChoices(getRandomItems(ALL_TASKS, level.eventsPerDay))
      }
      setAnimating(false)
    }, 600)
  }

  if (screen === 'menu') return <MenuScreen onStart={startGame} />

  if (screen === 'over') return (
    <GameOverScreen
      win={win}
      score={score}
      level={level}
      grynaSays={grynaSays}
      onRestart={() => startGame(level)}
      onMenu={() => setScreen('menu')}
    />
  )

  return (
    <GameScreen
      mood={mood}
      grynaSays={grynaSays}
      stress={stress}
      energy={energy}
      day={day}
      level={level}
      score={score}
      choices={choices}
      log={log}
      animating={animating}
      onPick={pickCard}
      onMenu={() => setScreen('menu')}
    />
  )
}
