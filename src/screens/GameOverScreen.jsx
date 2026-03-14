export default function GameOverScreen({ win, score, level, grynaSays, onRestart, onMenu }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: win
        ? 'linear-gradient(135deg, #0d1117, #0d2d1a, #0d1a2d)'
        : 'linear-gradient(135deg, #1a0a0a, #2d0d0d, #1a0d1a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      color: 'white',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 480, width: '100%' }}>
        <div style={{ fontSize: 80, marginBottom: 16 }}>{win ? '🏆' : '😵'}</div>

        <h2 style={{
          fontSize: 'clamp(2rem,7vw,3rem)',
          fontWeight: 900,
          margin: '0 0 12px',
        }}>
          {win ? 'Гриня врятований!' : 'Перевантаження'}
        </h2>

        <div style={{
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 16,
          padding: '16px 20px',
          marginBottom: 20,
          fontSize: 16,
          fontStyle: 'italic',
          color: win ? '#86efac' : '#fca5a5',
        }}>
          «{grynaSays}»
        </div>

        <div style={{
          fontSize: 32,
          fontWeight: 900,
          color: win ? '#4ade80' : '#f87171',
          marginBottom: 8,
        }}>
          {score} очок
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 15, lineHeight: 1.6 }}>
          {win
            ? `Ви пройшли ${level.days} днів рівня «${level.name}». Нове життя будується не ривком, а маленькими кроками.`
            : 'Нічого страшного. Гриня взяв лікарняний. Спробуйте ще раз — спокійніше.'}
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onRestart}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 12,
              padding: '12px 24px',
              color: 'white',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: 15,
            }}
          >
            Ще раз
          </button>
          <button
            onClick={onMenu}
            style={{
              background: win ? '#4ade80' : '#f87171',
              border: 'none',
              borderRadius: 12,
              padding: '12px 24px',
              color: '#0a0a0a',
              fontWeight: 800,
              cursor: 'pointer',
              fontSize: 15,
            }}
          >
            Вибрати рівень
          </button>
        </div>
      </div>
    </div>
  )
}
