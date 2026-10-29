import { useMemo } from 'react'

export default function Kept({ attempts, onBack }) {
  const rain = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2.5,
        duration: 2.8 + Math.random() * 2.5,
        size: 22 + Math.random() * 26,
      })),
    [],
  )

  return (
    <div className="overlay overlay--kept">
      <div className="rain" aria-hidden="true">
        {rain.map((p) => (
          <span
            key={p.id}
            style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`, fontSize: p.size }}
          >
            🥔
          </span>
        ))}
      </div>
      <div className="modal modal--kept">
        <div className="modal__inner">
          <div className="modal__emoji dance">🥔</div>
          <h2>Subscription renewed! 🎉</h2>
          <p className="modal__body">
            Thank you for staying with Potato Network Services. The potato has been notified and is doing a small, celebratory wiggle.
          </p>
          <div className="receipt">
            <div><span>Plan</span><b>Premium Potato</b></div>
            <div><span>Renewed for</span><b>Forever</b></div>
            <div><span>Price</span><b>Free (still)</b></div>
            <div><span>Cancellation attempts</span><b>{attempts}</b></div>
            <div><span>Potato's feelings</span><b>Hurt, but healing</b></div>
          </div>
          <div className="actions">
            <button type="button" className="btn btn--keep" onClick={onBack}>
              Back to my account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
