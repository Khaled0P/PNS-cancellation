import { SUBSCRIBER_NAME, MEMBER_SINCE } from '../config'

const FEATURES = [
  ['🥔', 'Unlimited potato', 'No caps, no throttling, no starch limits.'],
  ['💬', '24/7 support', 'A potato is always available to listen. Or nod. Potatoes nod.'],
  ['😂', 'Premium bad jokes', 'Delivered daily, whether requested or not.'],
  ['🛡️', 'Emotional protection', 'Your potato will fight anyone. Poorly, but with heart.'],
]

export default function Landing({ attempts, onCancel }) {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand__logo">🥔</span>
          <div>
            <div className="brand__name">PNS</div>
            <div className="brand__sub">Potato Network Services</div>
          </div>
        </div>
        <nav className="nav">
          <span>Plans</span>
          <span>Support</span>
          <span className="nav__active">Account</span>
        </nav>
      </header>

      <main className="content">
        {attempts > 0 && (
          <div className="banner">
            ✅ Your subscription is active and has been lovingly renewed.{' '}
            {attempts === 1
              ? 'You tried to cancel once. The potato forgives you.'
              : `You've tried to cancel ${attempts} times. The potato is starting to think it's a game.`}
          </div>
        )}

        <h1>Manage your subscription</h1>
        <p className="lede">Hi {SUBSCRIBER_NAME}, thanks for being a loyal member of the Potato Network.</p>

        <section className="card plan">
          <div className="plan__head">
            <div>
              <div className="eyebrow">Current plan</div>
              <div className="plan__name">PNS Premium · Lifetime Potato</div>
            </div>
            <span className="pill">● Active</span>
          </div>
          <dl className="plan__grid">
            <div><dt>Subscriber</dt><dd>{SUBSCRIBER_NAME}</dd></div>
            <div><dt>Member since</dt><dd>{MEMBER_SINCE}</dd></div>
            <div><dt>Price</dt><dd>$0.00 / forever</dd></div>
            <div><dt>Next bill</dt><dd>Never</dd></div>
          </dl>
        </section>

        <section className="card">
          <div className="eyebrow">Your plan includes</div>
          <div className="features">
            {FEATURES.map(([icon, name, desc]) => (
              <div className="feature" key={name}>
                <span className="feature__icon">{icon}</span>
                <div>
                  <div className="feature__name">{name}</div>
                  <div className="feature__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card danger">
          <div>
            <div className="danger__title">Cancel subscription</div>
            <p>Ending your subscription will disconnect you from the Potato Network. This action is (technically) reversible.</p>
          </div>
          <button type="button" className="btn btn--danger" onClick={onCancel}>
            Cancel subscription
          </button>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Potato Network Services. PNS is a registered trademark of one (1) potato.</footer>
    </div>
  )
}
