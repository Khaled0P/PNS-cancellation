import { useState } from 'react'
import { LEVELS } from '../levels'
import DodgeButton from './DodgeButton'

export default function CancelFlow({ onKeep }) {
  const [level, setLevel] = useState(0)
  const step = LEVELS[level]
  const next = () => setLevel((l) => Math.min(l + 1, LEVELS.length - 1))

  return (
    <div className="overlay">
      <div className={`modal modal--${step.variant ?? 'default'}`} key={level} role="dialog" aria-modal="true">
        {step.variant === 'error' && (
          <div className="titlebar">
            <span>Potato OS</span>
            <span className="titlebar__x">✕</span>
          </div>
        )}
        <div className="modal__inner">
          <div className="modal__emoji">{step.emoji}</div>
          <h2>{step.title}</h2>
          <div className="modal__body">{step.body}</div>
          <Actions key={level} step={step} onCancel={next} onKeep={onKeep} />
        </div>
      </div>
    </div>
  )
}

function Actions({ step, onCancel, onKeep }) {
  const [choice, setChoice] = useState(null)
  const [typed, setTyped] = useState('')
  const [pasteScolded, setPasteScolded] = useState(false)
  const [hovers, setHovers] = useState(0)
  const { trick } = step

  const blocked =
    (trick === 'survey' && choice === null) ||
    (trick === 'type' && typed.trim().toLowerCase() !== step.phrase.toLowerCase())

  const swap = trick === 'swap'
  const cancelScale = trick === 'shrink' ? Math.max(0.2, 1 - hovers * 0.16) : 1
  const keepScale = trick === 'shrink' ? Math.min(1.6, 1 + hovers * 0.1) : 1

  let cancelBtn
  if (trick === 'dodge' || trick === 'unreachable') {
    cancelBtn = (
      <DodgeButton
        label={step.cancel}
        caughtLabel={step.caughtLabel}
        taunts={step.taunts}
        maxEscapes={step.escapes}
        proximity={trick === 'unreachable'}
        className={trick === 'unreachable' ? 'btn--danger' : 'btn--secondary'}
        // On the last level, "catching" it just means it gives up and you keep the potato.
        onClick={trick === 'unreachable' ? onKeep : onCancel}
      />
    )
  } else if (trick === 'tiny') {
    cancelBtn = (
      <button type="button" className="btn-tiny" onClick={onCancel}>
        {step.cancel}
      </button>
    )
  } else {
    cancelBtn = (
      <button
        type="button"
        className={`btn ${swap ? 'btn--keep' : 'btn--secondary'}`}
        disabled={blocked}
        style={{ transform: `scale(${cancelScale})` }}
        onPointerEnter={() => trick === 'shrink' && setHovers((h) => h + 1)}
        onClick={onCancel}
      >
        {step.cancel}
      </button>
    )
  }

  const keepBtn = (
    <button
      type="button"
      className={`btn ${swap ? 'btn--danger' : 'btn--keep'}`}
      style={{ transform: `scale(${keepScale})` }}
      onClick={onKeep}
    >
      {step.keep}
    </button>
  )

  return (
    <>
      {trick === 'survey' && (
        <div className="survey">
          {step.options.map((opt, i) => (
            <label key={opt} className={`survey__opt ${choice === i ? 'is-on' : ''}`}>
              <input type="radio" name="reason" checked={choice === i} onChange={() => setChoice(i)} />
              {opt}
            </label>
          ))}
        </div>
      )}

      {trick === 'type' && (
        <div className="typer">
          <div className="typer__phrase">“{step.phrase}”</div>
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            onPaste={(e) => {
              e.preventDefault()
              setPasteScolded(true)
            }}
            placeholder="Type it. With your hands."
            autoFocus
          />
          {pasteScolded && <div className="typer__scold">Nice try. No pasting. The potato typed this by hand.</div>}
        </div>
      )}

      <div className={`actions ${swap ? 'actions--swap' : ''} ${trick === 'tiny' ? 'actions--stack' : ''}`}>
        {cancelBtn}
        {keepBtn}
      </div>
    </>
  )
}
