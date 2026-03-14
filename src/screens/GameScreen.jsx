export default function GameScreen({ mood, grynaSays, stress, energy, day, level, score, choices, log, animating, onPick, onMenu }) {
  const progressPct = ((day - 1) / level.days) * 100

  const energyColor = energy < 30 ? '#f87171' : energy < 50 ? '#facc15' : '#4ade80'
  const stressColor = stress > 75 ? '#ef4444' : stress > 50 ? '#f97316' : '#4ade80'

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: 'white',
      padding: '16px',
      fontFamily: 'inherit',
    }}>
      <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>

        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={onMenu}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: 10,
              padding: '6px 14px',
              color: 'white',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            ← Меню
          </button>
          <div style={{ fontSize: 13, color: '#a78bfa', fontWeight: 700 }}>
            {level.name} · {score} очок
          </div>
        </div>

        {/* Gryna */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 20,
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          border: `1px solid ${mood.color}44`,
        }}>
          <div style={{
            fontSize: 56,
            lineHeight: 1,
            filter: `drop-shadow(0 0 16px ${mood.color}88)`,
            flexShrink: 0,
          }}>
            {mood.emoji}
          </div>
          <div>
            <div style={{
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: mood.color,
              fontWeight: 700,
              marginBottom: 4,
            }}>
              Гриня — {mood.label}
            </div>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.5 }}>
              «{grynaSays}»
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          {/* Day */}
          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: '12px 14px' }}>
            <div style={{ fontSize: 11, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>
              День
            </div>
            <div style={{ fontSize: 24, fontWeight: 900 }}>
              {day}
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>/{level.days}</span>
            </div>
            <div style={{ marginTop: 8, height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progressPct}%`, background: '#a78bfa', borderRadius: 4, transition: 'width 0.4s' }} />
            </div>
          </div>

          {/* Energy */}
          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: '12px 14px' }}>
            <div style={{ fontSize: 11, color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>
              Енергія
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: energyColor }}>{energy}%</div>
            <div style={{ marginTop: 8, height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${energy}%`, background: energyColor, borderRadius: 4, transition: 'width 0.4s' }} />
            </div>
          </div>

          {/* Stress */}
          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: '12px 14px' }}>
            <div style={{ fontSize: 11, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>
              Стрес
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: stressColor }}>{stress}%</div>
            <div style={{ marginTop: 8, height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${stress}%`, background: stressColor, borderRadius: 4, transition: 'width 0.4s' }} />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div>
          <div style={{
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#a78bfa',
            fontWeight: 700,
            marginBottom: 10,
          }}>
            Оберіть дію — День {day}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
            {choices.map((card) => (
              <button
                key={`${day}-${card.id}`}
                onClick={() => onPick(card)}
                disabled={animating}
                style={{
                  background: card.type === 'heal'
                    ? 'linear-gradient(135deg, rgba(74,222,128,0.1), rgba(16,185,129,0.07))'
                    : 'linear-gradient(135deg, rgba(248,113,113,0.1), rgba(239,68,68,0.07))',
                  border: `1px solid ${card.type === 'heal' ? 'rgba(74,222,128,0.3)' : 'rgba(248,113,113,0.3)'}`,
                  borderRadius: 18,
                  padding: '16px',
                  color: 'white',
                  cursor: animating ? 'not-allowed' : 'pointer',
                  textAlign: 'left',
                  opacity: animating ? 0.6 : 1,
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => !animating && (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3, marginBottom: 10 }}>{card.text}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: 12,
                    padding: '2px 8px',
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.1)',
                    color: card.stress < 0 ? '#4ade80' : '#f87171',
                    fontWeight: 600,
                  }}>
                    Стрес {card.stress > 0 ? '+' : ''}{card.stress}
                  </span>
                  <span style={{
                    fontSize: 12,
                    padding: '2px 8px',
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.1)',
                    color: card.energy > 0 ? '#4ade80' : '#f87171',
                    fontWeight: 600,
                  }}>
                    ⚡ {card.energy > 0 ? '+' : ''}{card.energy}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Log */}
        {log.length > 0 && (
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '14px 16px' }}>
            <div style={{
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#a78bfa',
              marginBottom: 10,
              fontWeight: 700,
            }}>
              Щоденник Грині
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 180, overflowY: 'auto' }}>
              {log.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.7)',
                  padding: '6px 10px',
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                }}>
                  <span>{item.icon}</span>
                  <span style={{ flex: 1 }}>День {item.day}: {item.text}</span>
                  <span style={{
                    color: item.stress < 0 ? '#4ade80' : '#f87171',
                    fontWeight: 600,
                    fontSize: 12,
                  }}>
                    {item.stress > 0 ? '+' : ''}{item.stress}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
