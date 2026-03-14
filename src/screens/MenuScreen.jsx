import { LEVELS } from '../data.js'

const btnBase = {
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(167,139,250,0.3)',
  borderRadius: 16,
  padding: '16px 24px',
  color: 'white',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'background 0.2s',
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  width: '100%',
}

export default function MenuScreen({ onStart }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      fontFamily: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      color: 'white',
    }}>
      <div style={{ maxWidth: 540, width: '100%', textAlign: 'center' }}>
        <div style={{
          fontSize: 100,
          lineHeight: 1,
          marginBottom: 12,
          filter: 'drop-shadow(0 0 30px rgba(167,139,250,0.6))',
        }}>🧠</div>

        <div style={{
          fontSize: 12,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#a78bfa',
          fontWeight: 700,
          marginBottom: 8,
        }}>Технічне обслуговування</div>

        <h1 style={{
          fontSize: 'clamp(2.5rem,8vw,4rem)',
          fontWeight: 900,
          margin: '0 0 8px',
          lineHeight: 1.1,
        }}>
          Гриня<br />рулить
        </h1>

        <p style={{ color: '#c4b5fd', marginBottom: 40, fontSize: 16, lineHeight: 1.6 }}>
          Допоможи мозку пережити тиждень.<br />
          Без апокаліпсису. Без понеділкових рішень.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {LEVELS.map((lvl, i) => (
            <button
              key={lvl.id}
              onClick={() => onStart(lvl)}
              style={btnBase}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(167,139,250,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            >
              <div style={{ fontSize: 32 }}>{'🟢🟡🔴'[i]}</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16 }}>
                  Рівень {lvl.id}: {lvl.name}
                </div>
                <div style={{ color: '#c4b5fd', fontSize: 13, marginTop: 2 }}>
                  {lvl.description} · {lvl.days} днів
                </div>
              </div>
            </button>
          ))}
        </div>

        <p style={{ marginTop: 32, color: '#6d5dab', fontSize: 13 }}>
          Ви не ліниві. У вас просто є Гриня.
        </p>
      </div>
    </div>
  )
}
