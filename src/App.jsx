import { useState } from 'react'
import Landing from './components/Landing'
import CancelFlow from './components/CancelFlow'
import Kept from './components/Kept'

export default function App() {
  const [stage, setStage] = useState('landing')
  const [attempts, setAttempts] = useState(0)

  const keep = () => {
    setAttempts((a) => a + 1)
    setStage('kept')
  }

  return (
    <>
      <Landing attempts={attempts} onCancel={() => setStage('flow')} />
      {stage === 'flow' && <CancelFlow onKeep={keep} />}
      {stage === 'kept' && <Kept attempts={attempts} onBack={() => setStage('landing')} />}
    </>
  )
}
